#!/usr/bin/env python3
"""Generate responsive WebP photographs; keep source JPEGs and provenance intact.

Requires Pillow: python3 -m pip install Pillow
Run from any directory: python3 scripts/optimize-images.py
The largest rendition is capped at 1600px; smaller renditions never upscale.
"""
from pathlib import Path
import json
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent


def main():
    manifest = []
    for source in sorted((ROOT / 'assets').rglob('*.jpg')):
        with Image.open(source) as original:
            photo = ImageOps.exif_transpose(original).convert('RGB')
            width = min(photo.width, 1600)
            variants = []
            for target_width in sorted({width, *[w for w in (480, 800) if w < width]}):
                height = round(photo.height * target_width / photo.width)
                resized = photo.resize((target_width, height), Image.Resampling.LANCZOS)
                suffix = '' if target_width == width else f'-{target_width}'
                output = source.with_name(f'{source.stem}{suffix}.webp')
                metadata = {key: original.info[key] for key in ('icc_profile', 'xmp') if original.info.get(key)}
                resized.save(output, 'WEBP', quality=82, method=6, **metadata)
                variants.append({'path': str(output.relative_to(ROOT)), 'width': target_width,
                                 'height': height, 'bytes': output.stat().st_size})
            manifest.append({'source': str(source.relative_to(ROOT)), 'original_bytes': source.stat().st_size,
                             'variants': variants})
    print(json.dumps(manifest, indent=2))


if __name__ == '__main__':
    main()
