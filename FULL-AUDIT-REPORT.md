# Orkid Ria SEO audit and improvements

Audit date: 20 September 2026. Scope: all five public pages, production HTTP behaviour, source code, local browser rendering, structured data and 25 photographs. Baseline evidence: `docs/seo/before.json`.

## Findings and implementation

| Priority | Finding before audit | Implemented response |
|---|---|---|
| High | Five pages used the same generic description; no canonical tags | Unique intent-specific titles/descriptions and absolute canonical URLs on all five pages |
| High | Invalid `SeafoodRestaurant` schema type; no page relationships | `Restaurant`, `WebSite`, page entities and visible child-page breadcrumbs with `BreadcrumbList` |
| High | Sitemap returned 404; robots had no sitemap declaration | Five-URL XML sitemap and robots rules for public content, API and administration |
| High | HTTP, release parameters and Workers hostname exposed duplicate pages | Production-only 301 canonical redirects; local preview/API parameters preserved |
| High | Homepage lacked full address; little useful local context | Consistent name/address/phone, Pantai Tengah introduction and clearer menu, visit and reservation guidance |
| Medium | Full JPEGs used at every display size; missing or inaccurate intrinsic dimensions | 75 WebP variants for 25 photos, responsive srcsets, correct dimensions, below-fold lazy loading and priority hero images |
| Medium | Google Fonts discovered through CSS import | Direct head stylesheet plus connection hints |
| Medium | Nested 404 could reference broken relative assets | Root-relative home/style links and noindex on the error page |
| Medium | No consistent social preview metadata | Open Graph and Twitter card metadata with a real restaurant photograph |

All five pages retain one H1 and crawlable HTML navigation. Added contextual links connect the menu, restaurant, story and reservation pages. Existing animations, call/WhatsApp controls and hidden Google reviews remain intact. Early Release label is retained.

## Local search and content strategy

The primary geographic intent is **seafood restaurant in Pantai Tengah, Langkawi**. The homepage serves discovery; menu serves dish exploration; visit serves directions/hours/gallery; reservation serves table enquiries; story explains the dining experience. This avoids competing location landing pages with near-identical copy.

Current site information is Lot 418, Jalan Pantai Tengah, Jalan Teluk Baru, Mukim Kedawang, 07100 Langkawi, Kedah; +60 17-614 4128; daily 13:00–23:00. Older tourism references mention Pantai Cenang, so owner-managed citations and the map pin should be checked for consistency. The website cannot correct external listings automatically.

No invented prices, halal certification, accessibility facilities, founding dates, review totals or ratings were added. Menu remains explicitly highlights, pending an owner-approved current menu. No self-serving review/aggregate-rating markup was added. Google reviews are still disconnected and hidden.

## Images and performance

Original 25 JPEG files total 6,148,014 bytes. Full-size WebPs total 4,081,870 bytes (33.6% smaller); 800px variants total 2,156,778 bytes; 480px variants total 904,988 bytes. These are file-size comparisons, not measured page-load improvements. Originals remain accessible through gallery links. All 75 generated images passed decoding checks.

PageSpeed API returned a quota error. No authenticated CrUX, Search Console or Analytics access was available. LCP, INP, CLS, index coverage, search traffic and ranking changes are **unmeasured**. The carousel still loads multiple photos and third-party fonts remain a performance consideration. Measure real mobile performance before further tuning.

## Verification and limits

34 automated tests passed, including five document checks, 13 technical SEO cases and 16 existing mocked reviews/security checks. Tests check canonicals, unique descriptions, one H1, metadata, business identity, breadcrumbs, local image/link existence, redirects, true 404 handling and preservation of API/local behaviour. Build and git whitespace checks passed. Automated schema checks validate the intended graph; Google Rich Results Test and Search Console URL Inspection remain external follow-ups.

No measured overall SEO score is supplied: assigning performance, authority or search-visibility points without access would imply unsupported precision. Technical/on-page/schema/image defects above are resolved in source; off-site authority, verified business profile management and real search outcomes remain outside those checks. No ranking guarantee is implied.

## References

- [Google local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Restaurant listing on Langkawi App](https://langkawi.app/business/orkid-ria-seafood-restaurant)
- [Current Tripadvisor restaurant listing](https://www.tripadvisor.com/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html)

These sources support implementation choices and local-business research; they do not establish API access, photo licensing or future ranking outcomes.

## Deployment verification

Deployed to Cloudflare Worker version `7e01870b-80ce-4043-9474-61be1181d58d`. Live homepage and sitemap returned 200; `/menu?release=test` returned 301 to `/menu/`; an unknown path returned 404. Live metadata snapshots for all five pages are recorded in `docs/seo/after.json`. At 390px, all five local pages had no horizontal overflow; desktop homepage also passed the overflow check. This is layout verification, not a full accessibility certification or performance benchmark.
