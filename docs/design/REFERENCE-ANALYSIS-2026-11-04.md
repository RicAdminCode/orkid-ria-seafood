# Orkid Ria design adaptation — 4 November 2026

Reference: https://www.flowline.catering/en

## Method and scope

Cloned the official REA repository (https://github.com/morluto/rea) to /tmp/orkid-rea-tooling, revision 2d16a40a491067ef0bbe541feef2feeb5f3110ad. Used REA 6.8.0 CLI with Node 22.23.4 for passive CDP target discovery and page inspection in a dedicated local Chrome profile. No global agent configuration changed.

REA evidence: ev_b216a3cdf6332764620a5f31e5de66da9800d4fb2caae1a1da6704175a6eb07c. Provider: rea-cdp-browser. This is an attach-time observation; it does not establish complete prior network activity or asset ownership. Raw captures and reference screenshot stay outside the production build.

Visual observations: dark canvas, large light sans serif headings, generous section spacing, pill navigation and actions, prominent photography, numbered information sections, alternating image and text layouts.

## Implementation

Authored project CSS independently around those general visual patterns. Reorganized the existing homepage into hero, introduction, photographic menu highlights, dining links, ordering guide, contact/hours, reviews when configured, and footer. Applied shared design to Menu, Dining Experience, Visit, and Reservations. Added homepage previews from existing project menu content. Preserved the eight-photo carousel, keyboard controls, motion preference, original page text, all existing assets, historical attribution, menu caveat, and reservation confirmation wording.

No Flowline source code, downloadable template, images, logos, fonts, customer claims, contact details, analytics, product information or content were imported. The reference is a visual study, not a licensed template package. No dependencies or server changes were needed for this adaptation.

## SEO and validation

Preserved five canonical URLs, unique titles/descriptions, social metadata, Restaurant/WebPage/WebSite/BreadcrumbList structured data, robots and sitemap configuration. All main homepage sections now live inside its main landmark. Responsive image variants and lazy loading remain in place. Existing test suite: 40 passed. Real browser checks cover five routes at desktop and mobile sizes, plus navigation and carousel controls. See CONTENT-AUDIT-2026-11-04.md for the independent content audit and unresolved existing photo rights.

No production deployment was performed. This work does not certify legal clearance or guarantee search rankings.

## Full structure follow-up — 4 November 2026

Rebuilt the homepage section sequence after the request for precise structural matching: hero; staggered seafood photo rail; full-width editorial introduction; category strip; five numbered photo panels with a sticky heading; two image cards with overlaid text; menu photo rail; photographic editorial panel; existing live reviews when configured; 12 native FAQ disclosures; wide alternating gallery; centered reservation CTA; footer and retained restaurant information. No reference testimonials or partner logos were invented: those positions use existing restaurant editorial copy and food categories.

Measured the live reference at 1543 × 984 and mobile 390 × 844. The 11 primary desktop section widths and heights match the measured reference within 1 CSS pixel. The reference has a 1532px content viewport after its scrollbar; the local page uses the same width. Exact measurements and deltas are in `STRUCTURE-MEASUREMENTS-2026-11-04.json`. This verifies section geometry at that viewport, not whole-screen pixel identity: text wrapping, photography/crops, reference motion states, the requested dark menu palette, and extra existing restaurant/footer information differ. Mobile uses responsive rails, stacked cards/panels, and disclosures; its text-dependent heights are not claimed to match within one pixel.

Kept the transparent header over the image at the top. It becomes a fixed dark navigation bar after scrolling, matching the reference interaction while preserving the earlier user adjustment. Rebuilt rail arrows using native scrolling with reduced-motion and pause preferences. Keyboard and click interactions were checked in real Chromium; FAQ disclosures use native details/summary. All 40 existing tests pass. Independent follow-up audit preserved all 108 preceding homepage text units and 22 image occurrences, with unchanged business metadata and JSON-LD. Reference screenshots/raw DOM measurements remain in `/tmp/orkid-reference-artifacts` and other `/tmp/orkid-reference-*` files; only implementation measurements and project screenshots remain in the project.

## Image quality and delivery follow-up — 4 November 2026

Regenerated all 25 existing photographs directly from their original JPEGs as AVIF quality 60 with 4:4:4 chroma and WebP quality 86 fallbacks. Added 1200px renditions where the source supports them; no rendition exceeds its source dimensions. Original JPEG bytes and provenance records remain unchanged. Responsive picture sources cover all five pages. Size hints account for the actual rail/card widths and the extra pixels required by tall cover crops, including the mobile hero. Only the active hero slide is initially displayed; other lazy hero slides load on selection. Below-fold photos retain native lazy loading and asynchronous decoding.

Like-for-like files across the existing 75 rendition dimensions total 6,149,238 bytes as AVIF versus 7,143,636 bytes for the previous WebP files (13.9% fewer bytes). Full-resolution RGB PSNR against the original JPEGs averages 39.34dB, versus 37.95dB previously; all 25 native-size AVIF files have lower encoding error. This is an encoding fidelity measurement, not proof that original photographic blur has been repaired. No invented detail, scene edits, sharpening filters, or new photography was introduced. Five venue originals are only 1015px wide; large screens and high density displays can still expose that source limit.

All 40 tests passed after the image delivery update; the page asset and navigation checks were repeated after the final crop-aware hero size hints. Browser checks covered all five routes at desktop/mobile widths with no broken loaded images or horizontal overflow. A separate 2× mobile browser context selected the full native hero AVIF. Full results and quality/byte measurements are in `IMAGE-OPTIMIZATION-2026-11-04.json`. No field Core Web Vitals or production network speed claim is made.

## Compact hero and CruiseOS seafood showcase — 4 November 2026

Later browser comments supersede the reference geometry for the hero and first photo rail. The hero now uses 60svh (590.4px at the supplied 1543 × 984 viewport), with compact text spacing. Minimum heights of 520px on desktop and 500px on mobile protect the navigation, copy and controls on shorter viewports. Its transparent header and optimized images remain.

Inspected `/Users/rl/Projects/cruiseOS-web-template/public/index.html`, its charter carousel styling and interaction script. The project is a local BlueMore frontend capture; only its layout and behavior were used as a design reference. The replacement seafood section uses its centered active card, 90%-scale dimmed neighbors, card-edge circular arrows, text over photography, section heading/description/menu link and progress line. Responsive widths follow the template's 91%, 77%, 67%, 51.3% and 43.5% sequence. Native scroll snapping implements pointer/touch scrolling, keyboard arrows and looping; duplicate edge cards are inert and hidden from assistive technology. No template code library, yacht content, customer details, pricing, favorites, external media or tracking was imported. Orkid Ria's six food photographs, captions and menu destination are retained. Image size hints were updated for the new crops.

## Latest browser comments — 4 November 2026

The hero is now 80svh (787.2px at 1543 × 984), superseding the earlier 60svh adjustment. Photos automatically advance every three seconds after decoding. A local pause/resume control, global motion preference, reduced-motion preference, visibility check, and control focus/hover pauses remain available. Automatic slide changes do not generate live-region announcements; manual controls still do. The previous gold italic Fraunces wordmark replaces the outlined uppercase label. No approved official logo file was available.

Gold running borders now appear on seafood/gallery photo hover or keyboard focus and on the four footer contact buttons. Selected introduction links have running gold underlines, and the hours' two separators and contact divider have running light accents. Invisible hover frames remain paused to avoid unnecessary animation work. Global pause and reduced motion apply to these effects.

The duplicate menu highlight rail was replaced with two short attributed guest review excerpts and three credited existing visitor photos. See `GUEST-STORY-SOURCES-2026-11-04.json`, the content audit follow-up, and the updated CONTENT_SOURCES.md. No verified Instagram account/post was found. Existing image rights remain unresolved; no new photo ownership or legal-clearance claim is made. `NEON-GUEST-CHECKS-2026-11-04.json` records desktop/mobile checks, automatic slide rotation/pause behavior, hover animation states, reduced motion, and the 40 passing tests.
