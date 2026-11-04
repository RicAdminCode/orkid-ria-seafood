# Independent content and provenance audit — 4 November 2026

Scope: the redesigned `index.html`, `about/index.html`, `menu/index.html`, `reservation/index.html`, `restaurant/index.html`, shared `styles.css`, and generated public assets in `dist/`. This is a technical content audit by a separate AI agent, not a legal opinion or clearance certificate.

## Baseline and method

Compared the working files with `/tmp/orkid-before-redesign`, the exact snapshot taken before this redesign. Git HEAD was not used as the content baseline because the workspace already contained user changes. Inspected existing provenance records in `CONTENT_SOURCES.md`, `assets/gallery/sources.json`, and `assets/langkawi-app/sources.json`.

Parsed both versions using the installed Happy DOM dependency. Compared normalized nonempty body text nodes with occurrence counts, image source occurrence counts, image descriptions and responsive variants, metadata, JSON-LD, and script elements. Fetched the public reference page at https://www.flowline.catering/en and compared normalized contiguous eight-word phrases. Scanned public source and generated assets for reference brand, business, asset-host, and tracking markers.

## Preservation results

| Page | Original text units | Current text units | Original image elements | Current image elements | Missing original text or image sources |
| --- | ---: | ---: | ---: | ---: | --- |
| Home | 64 | 108 | 16 | 22 | None |
| Dining Experience | 80 | 80 | 5 | 5 | None |
| Menu | 66 | 66 | 7 | 7 | None |
| Reservations | 50 | 50 | 1 | 1 | None |
| Visit | 124 | 124 | 24 | 24 | None |

All 384 original text units and all 53 original image element occurrences are retained. Existing image `src`, `srcset`, and `alt` combinations are present in the redesign. The six additional homepage photographs and their dish descriptions already appeared on the existing Menu page. New homepage content reuses existing project content and footer material; the only new body text units relative to the complete original five-page corpus are ordinary navigation labels: “Explore the Menu”, “Plan Your Visit”, and “Explore the Menu ↗”.

Each page retains one H1. Titles, descriptions, canonical URLs, social metadata, and all existing JSON-LD are unchanged. The only head changes are the shared stylesheet cache version and the Google Fonts query: Figtree already existed in the project, with the redesign adding its light weight and removing Fraunces from the query. All original script elements are unchanged. The homepage adds a WhatsApp link already present on the existing reservation/menu pages, using the existing Orkid Ria number and message.

The attributed 1989/2004 history and January 2025 reporting remain intact, including source links. The current Pantai Tengah address, phone, hours, menu caveat, allergy notice, ordering price confirmation guidance, and reservation confirmation caveat remain intact. No new restaurant operating promises, awards, ratings, prices, dietary certifications, or historical claims were introduced.

## Reference-content contamination findings

No contiguous eight-word text matches were found between the reference page and any of the five redesigned pages. This is supporting evidence, not a complete plagiarism determination: short phrases, images, layout expression, and unexamined pages require separate consideration.

No matches were found in the inspected public source or generated assets for Flowline branding, its website domain, Webflow/website-files asset markers, Embedly, Maneuver attribution, the named reference testimonials, or reference product terminology such as conveyor, heat lamp, and Gastronorm. The scan also checked common Google Analytics/GTM, Meta Pixel, Clarity, and Hotjar identifiers. No new script elements, reference contact information, reference business facts, or reference customer testimonials were identified.

The implemented stylesheet contains project-specific CSS and uses the existing local images. These checks found no imported reference stylesheet or script URL. They do not establish exclusive authorship of every CSS declaration or legal clearance of visual similarity.

## Build audit

After the final build, this audit agent independently reconfirmed that all five generated HTML files and the shared `styles.css` match their source files byte for byte. The earlier CSS build lag observed during active implementation is resolved. The provenance documentation is outside the build script's public asset allowlist.

## Existing rights and information limits

**Unresolved existing image rights:** `CONTENT_SOURCES.md` expressly states that the Tripadvisor review photographs and the five Langkawi App photographs have recorded provenance but unverified commercial reuse permission. Associated review publication dates do not establish capture dates or a licence. Reusing those pre-existing files in a new layout does not resolve that issue. Written permission covering website use, any required credits, and relevant identifiable-person consent must be established by the owner or replaced with properly cleared material before claiming rights clearance.

**Existing owner confirmation gaps:** the source ledger records outstanding confirmation of current postcode/address details, phone/WhatsApp, opening hours, menu and prices, official brand/legal identity, and social handles. The redesign preserves existing information; this audit did not obtain owner sign-off or verify current operations. Existing menu and reservation caveats appropriately avoid guaranteeing availability or a booking.

**Legal limits:** public availability of a reference website does not itself establish permission to copy its protected code, assets, branding, or distinctive expression. This audit found no reference content contamination in the inspected deliverables, but it cannot guarantee freedom from copyright, design, trademark, privacy, or other claims. No commercial licence was obtained and no legal professional reviewed this implementation. Do not describe the redesign as legally certified or fully protected on the basis of this audit.

## Handoff findings

No blocking loss of existing text, images, SEO metadata, or business facts was found. Final source/build parity is confirmed for all five public HTML files and the shared stylesheet. The existing third-party image permission issue remains the material rights action; it predates this redesign and is not evidence that Flowline material was copied.

Skipped: full legal clearance, verification of owner operations, and browser interaction testing by this audit agent. Risk: existing third-party image permissions remain unresolved.

## Follow-up: full homepage structure adaptation

The user subsequently requested the full reference homepage structure and measured layout precision. The findings above describe the first redesign pass. This section records the independent follow-up audit of the expanded homepage and its new rail controls, compared with the exact `/tmp/orkid-before-structure-match/index.html` snapshot. Reference measurements remain outside the project at `/tmp/orkid-reference-layout.json`.

### Preservation and factual checks

- Homepage normalized text units increased from 108 to 230. Every original unit remains, with no reduction in original occurrence counts.
- Homepage image elements increased from 22 to 42. Every original image source occurrence remains. Added photographs come from the site's existing local image collection; all source files and responsive `srcset` targets resolve to existing local files after normal URL resolution.
- All homepage titles, metadata, canonical/social information, and JSON-LD remain unchanged. The expanded homepage retains one H1 and has no duplicate IDs.
- Added FAQ answers and editorial passages reuse the existing About, Visit, Menu, and Reservations content. New FAQ questions, ordinary navigation labels, arrow symbols, step numbers, capitalization, and combined opening-hour text do not introduce additional business facts.
- The homepage explicitly retains the menu limitation (“not a full current menu”), availability/preparation/price confirmation, weight/price agreement, allergy discussion, and reservation confirmation caveats. The FAQ also repeats that a message is a request and that confirmation must come from the restaurant.
- Source-linked history remains on the unchanged About page. The homepage story link introduces no new dates, founder identity, ownership claim, or uninterrupted-operation claim.

### Reference and destination checks

A fresh fetch of https://www.flowline.catering/en produced no normalized contiguous eight-word text matches with the expanded homepage. A renewed public source/generated output scan found no Flowline brand, business, customer/testimonial, product, asset-host, embed, or common analytics markers from the reference. No new reference text, imagery, contact details, external scripts, or tracking code were identified.

All homepage local page links, full-size photograph links, image sources, and responsive image candidates resolve to existing project files. The only anchor without an `href` is the original hidden Google review link; the existing reviews module supplies its destination when review data is available. The five `../assets/...` journey image paths resolve to `/assets/...` at the site's root URL; they are not broken relative URL destinations.

The new `app.js` rail handler queries only the button's containing section and its local `.photo-rail`, guards a missing first item, and scrolls by the first card's width plus the defined CSS gap. Native buttons provide keyboard activation. Reduced-motion or paused-motion preferences use instant scrolling. Inspection found no new data submission, external request, imported reference script, or factual content in this handler. Browser behavior is for the implementation agent to verify.

At this follow-up pass, `index.html`, `app.js`, and `styles.css` matched their respective generated `dist/` files byte for byte. Rebuild if implementation changes after this audit.

### Follow-up conclusion and legal limits

No blocking original-content loss, new unsupported business fact, broken local destination, or reference-content contamination was identified. The requested closer structural/layout match is intentional; these content checks do not evaluate whether the resulting visual similarity affects copyright, design, trade dress, or other legal rights. Absence of copied text/assets does not by itself establish legal clearance. The pre-existing third-party photograph permission and owner-confirmation gaps documented above remain unresolved.

Skipped: legal clearance, visual-similarity adjudication, and browser interaction testing by this audit agent. Risk: existing image permissions remain unresolved; a measured reference layout match cannot be certified legally protected by an AI content audit.

## Follow-up: guest stories and visitor photographs

Scope of this pass: the new `.guest-stories` section in `index.html` and `docs/design/GUEST-STORY-SOURCES-2026-11-04.json`, checked against public Tripadvisor listing text and the existing photo provenance records. Other neon, hero, and wordmark styling changes are outside this content pass.

### Testimonial and photo attribution checks

| Contributor | Content used | Audit result |
| --- | --- | --- |
| Janine W | One short review excerpt; 14 September 2026; `assets/2026/sep-janine.webp` | The public [Tripadvisor UK listing](https://www.tripadvisor.co.uk/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html) independently corroborates the opening sentence and written date. `CONTENT_SOURCES.md` associates the existing image with Janine W's review on that date. |
| Oana M | One short review excerpt; 6 January 2026; `assets/gallery/32-23-a9-39.webp` | The public [Tripadvisor Canada listing](https://www.tripadvisor.ca/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html) independently corroborates the excerpt and written date. `assets/gallery/sources.json` attributes the existing image to Oana M. |
| Rene R | Visitor photograph only; 3 February 2026; `assets/gallery/32-5c-64-aa.webp` | Existing gallery provenance records associate this image and date with Rene R. The listing text corroborates the review's written date. The card contains no blockquote and makes no claim that Rene supplied a testimonial. |

Oana's existing gallery JSON records 5 January, while `CONTENT_SOURCES.md` explicitly documents a localized 5/6 January variation. The new displayed 6 January date agrees with the currently accessible Canadian listing. This is not evidence of a fabricated date; the source discrepancy remains documented.

The guest source JSON and markup agree on all three authors, dates, and image files. All guest image AVIF/WebP sources and responsive candidates exist locally. Dates are review publication dates, not claimed camera capture dates. Contributor credits are explicit, and the section describes its selection as excerpts and traveller photographs with links for full context.

No numerical score, stars, aggregate review count, `Review` schema, `reviewRating`, or `aggregateRating` was added for this section. The excerpts are not presented as a live feed. There is no Instagram handle, post, embed, or media URL in the guest section. The source JSON's statement that no official Instagram account was verified appropriately reports uncertainty rather than claiming an account does not exist. Its brand note describes the prior project wordmark and does not claim it is verified official logo artwork.

### Verification limits and remaining rights issue

This audit agent could read the listing excerpts through its search index but could not open the two exact `ShowUserReviews` URLs. The implementation agent separately reported successful live clicks from the primary Tripadvisor listing: Janine W resolved to review ID `1077721918`, title “Awesome Dining Experience”, dated 14 September 2026; Oana M resolved to review ID `1045098689`, title “Best restaurant experience in Langkawi”, with 6 January 2026 on the listing. Thus the direct numeric IDs are supported by the implementation agent's successful primary-source navigation, while the independent corroboration here covers the listing text/authors/dates. Photograph-to-review association is supported by the existing project provenance ledger; this audit agent did not independently retrieve each original photo detail page. No new portrait downloads were introduced, according to the implementation agent.

No fabricated testimonial, contributor, rating, or new restaurant operating fact was identified. Existing photo provenance is not permission: public availability and attribution do not establish a commercial reuse licence. The previously documented photo permissions remain unresolved, and this audit grants no clearance for either photographs or review excerpts.

Skipped: separate re-opening of exact direct-review IDs by this audit agent, original photo detail pages, review-content reuse licensing, and visual styling verification. Risk: existing third-party photo/review permissions remain unresolved.

## Follow-up: 20 additional testimonials

Audited the 20 new text-only guest cards against `GUEST-STORY-SOURCES-2026-11-04.json` and `CONTENT_SOURCES.md`. There are exactly 20 unique added review IDs and 20 distinct recorded reviewer names/handles. Every added card matches its source record for text, attribution, source URL, and publication month. The section now contains 23 cards: 18 direct excerpts, four translated summaries, and the existing Rene R photo-only card. This supports the displayed count of 22 testimonials. All four summaries visibly state “Translated review summary” and their source language, use third-person prose, and omit blockquotes/quotation marks. All 16 added direct excerpts match the exact ledger wording. The 20 additions contain no photograph or portrait; only the original three credited photos remain. No review score, stars, aggregate rating, or review-rating schema was added. Source and built homepage matched at this audit pass.

Independent public-source sampling corroborated the substantive wording and months through the [Tripadvisor Malaysia listing](https://www.tripadvisor.com.my/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html), [Canadian second review page](https://www.tripadvisor.ca/Restaurant_Review-g26498275-d32829545-Reviews-or15-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html), and [Indian third review page](https://www.tripadvisor.in/Restaurant_Review-g26498275-d32829545-Reviews-or30-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html). The four Dutch/Russian/French/Portuguese summaries are consistent with the displayed translated review passages. The Portuguese original also supports the three visits in João R's summary. Independent navigation to review `1047585879` corroborated the `suttung`/`kvasir` name variation and January publication; navigation from the listing also resolved Monique T's and Zulkarnain's recorded IDs. Public text independently confirms that uzmelissa's January 2026 publication describes a December 2025 visit. The new cards correctly label dates “Published”, avoiding a claim that the meals all occurred in those months.

No material factual or attribution issue was identified. Reviewer aliases and localized one-day date differences are explicitly retained in the source ledger; month precision is appropriate for the additions. The implementation agent reports primary-source verification of all 20 individual review IDs and all 16 English excerpts. This audit independently checked all markup-to-ledger mappings and a substantial public-source sample; several direct Canadian review URLs were inaccessible to this audit agent, so it did not separately re-open every ID or verify every profile alias. The four summaries are paraphrases of platform-displayed translations, not certified translations. Existing source-attribution and content-permission limits continue to apply.

Skipped: exhaustive independent re-opening of every direct review and profile alias, and new licensing clearance. Risk: the existing third-party content reuse permissions remain unresolved.

## Follow-up: photographs on every guest card

Compared the guest section and source JSON with `/tmp/orkid-before-guest-autoplay/`. All 23 cards now have one image. The first three contributor figures, captions, and source records are unchanged. All 20 additional image mappings match their ledger entries after normal URL decoding; encoded spaces in markup and literal spaces in the JSON refer to the same files. The seven existing `assets/environment` image files resolve locally. Every added record has `imageKind: restaurant-context` and the matching visible caption “Restaurant photograph · Orkid Ria”. All pre-existing review text, author, date, source-link markup, and ledger fields remain unchanged. No reviewer portrait or rating was introduced. Source and generated homepage matched during this audit.

The section introduction explicitly explains that additional reviews are paired with restaurant photographs. Captions and descriptive alt text do not attribute those photos to the adjacent reviewer. This appropriately distinguishes the contextual restaurant imagery from the original contributor photographs. The pairing still creates a visual association for readers who skip the introduction; the photos must not be described as evidence of those reviewers' actual visits or as their own submissions. An explicit “illustrative restaurant photograph” caption would make that distinction even clearer, but no false contributor credit was found in the current markup. `CONTENT_SOURCES.md` records that user selection of the environment folder does not independently establish image rights or capture dates.

Skipped: autoplay behavior, CSS, logo artwork, and renewed external review research, as outside this focused pass. Risk: contextual imagery does not document an individual reviewer's visit; existing image-permission limits remain.

Final wording confirmed: all 20 contextual-photo captions and their ledger `imageCaption` values now read “Restaurant photograph · illustrative”, further clarifying that these images illustrate the restaurant rather than document each reviewer’s visit.

## Follow-up: footer discovery cards and consolidation

Independently inspected the footers on all five public pages against the homepage snapshot in `/tmp/orkid-before-footer-discovery/` and the latest `CONTENT_SOURCES.md` entry. The address/telephone block and copyright/support/release block are identical to the snapshot; all five now contain those blocks and the social links inside their footer. Existing Orkid Ria phone, hours, Facebook and Maps destinations remain present. Every listing card uses the exact Orkid Ria URL `https://langkawi.app/business/orkid-ria-seafood-restaurant`. No EGE business name, duty-free description, or EGE listing destination was found in these footers. Both copied badge assets have SHA-256 hashes identical to the two corresponding shared assets in the user-referenced local EGE project.

Every Google graphic links to `https://www.google.com/preferences/source?q=langkawi.app`; its accessible image label explicitly says “Add Langkawi.app as a preferred source on Google (opens in a new tab)”. Visual inspection confirms the graphic is phrased as an invitation to add a source. Neither the caption nor the markup claims Google endorsement of Orkid Ria, existing preference selection, or a guaranteed search result. The source being offered is Langkawi.app, not the restaurant domain. This is a normal external link with no Google widget or script in the footer. All five generated HTML files matched their source files during this pass.

No material factual loss or cross-business contamination was identified. Skipped: live Google account preference interaction, motion behavior, videos/reviews, and renewed asset-licence clearance. Risk: the badge invites an optional Langkawi.app preference and does not establish endorsement or ranking benefits.
