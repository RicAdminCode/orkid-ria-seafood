# Orkid Ria Seafood Restaurant

Complete static website, exported from the latest published design on 20 September 2026.

## Contents

- Homepage, menu, story, visit, reservation and 404 pages.
- Shared CSS and JavaScript.
- Six local restaurant photographs associated with 2026 reviews.
- Content source and date audit in CONTENT_SOURCES.md.

## Upload to GitHub

1. Extract this ZIP.
2. Upload the contents of the orkid-ria-website folder to your repository root, including index.html, assets and page folders.
3. Commit the files. The static site can be viewed alone, but the Google reviews integration requires the Cloudflare Worker build and backend.

## GitHub Pages

In repository Settings, open Pages. Select Deploy from a branch, choose your branch and the root folder, then save. Use the URL GitHub provides.

Links use relative paths to support repository subpaths and custom domains. A nested missing URL may not resolve the 404 page assets correctly on GitHub Pages.

## Local preview

From the extracted website folder, run:

```sh
pnpm dev
```

Open http://localhost:3123 in your browser. Requires Node 22.22+ and pnpm. Run `pnpm install` first. Local preview now uses Cloudflare Workers and D1; secrets are optional for the not-connected state.

## Editing

Edit the HTML files for content, styles.css for design and app.js for interactions. Images are in assets/2026.

## External services and source limitations

Google Fonts requires internet access. The location page embeds Google Maps. Reservations use a telephone link and do not submit online bookings.

Photograph dates refer to associated review publication dates, not verified capture dates. Third-party image reuse rights have not been verified. Contact details and opening hours were checked against current listings without dated update records. See CONTENT_SOURCES.md for evidence.

No credentials, repository history or hosting account configuration are included.

## Google reviews and Cloudflare hosting

See [the complete setup and verification guide](docs/google-reviews.md). Run `pnpm test` for mocked checks and `pnpm build` to create the public asset allowlist. Production Google reviews require approved API access and owner/manager OAuth; no live connection is configured. GitHub Pages cannot run this backend.
