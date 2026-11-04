# Orkid Ria: technical, content, keyword and PR audit

**Audit date:** 3 October 2026 · **Business:** single-location seafood restaurant, Pantai Tengah, Langkawi  
**Production:** https://orkidriaseafood.com/ · **Preview:** http://localhost:3123/  
**Status:** research completed; two improvements implemented locally; no deployment or outreach performed.

## Executive decision

The best next investment is to make Orkid Ria the clearest, most reliable source of information about its own food and current location. The site already has a sound small-site structure. Its biggest weaknesses are a failing www hostname, unpublished local improvements, incomplete menu information and conflicting old business listings. More generic restaurant prose or dozens of keyword pages would not solve these problems.

The first five priorities are:

1. Repair the www hostname and publish the reviewed local site after checking facts and photo rights.
2. Get an owner-approved current menu into accessible HTML, including preparation choices and honest pricing/weight information.
3. Reconcile current Pantai Tengah identity across the website, the verified Google Business Profile and important existing listings.
4. Establish Search Console and enquiry measurement before judging keyword or PR results.
5. Produce original, licensed photos and a named owner interview to support useful editorial coverage.

**Implemented in this audit:** public-page redirects preserve campaign parameters while removing intentional preview flags; the Visit page now answers current location, hours and table-request questions. These changes are local only.

### Provisional readiness score

This is an **editorial audit estimate**, not a Google score, ranking forecast or measured traffic model. Rubric: 90–100 = no material gap observed; 75–89 = sound baseline with unresolved improvements; 50–74 = important information/launch gaps; below 50 = major access or usefulness failures. Subtracting points represents auditor judgment, not a causal ranking calculation.

| Category | Weight | Assessed score | Weighted points | Reason |
| --- | ---: | ---: | ---: | --- |
| Technical | 22% | 75 | 16.50 | Canonical site works, but www fails, local changes are unpublished and measurement is absent |
| Content | 23% | 62 | 14.26 | Useful honest copy, incomplete current menu and first-party operating facts |
| On-page | 20% | 85 | 17.00 | Unique metadata, headings and links; mobile contact placement and live content lag |
| Structured data | 10% | 85 | 8.50 | Consistent Restaurant graph; enrich only with verified current details |
| AI/search answer clarity | 10% | 75 | 7.50 | Static readable facts and sourced history; contradictory outside listings and limited original reporting |
| Images | 5% | 60 | 3.00 | Responsive assets and dimensions; rights unresolved, slideshow loading opportunity |
| Performance / field CWV | 10% | **Not measured** | **Unknown** | No CrUX access; PageSpeed API returned 429 quota error |

**Assessed points: 66.76/90.** Rounded overall range is **67–77/100**, depending on the unmeasured performance category. This is deliberately a range; there is no defensible measured overall score yet. It describes present launch readiness, not the quality of the restaurant or its standing in Google.

## Scope and evidence limits

- Checked the five canonical public pages, 16 HTTP routes/variants and 81 resources referenced by production HTML.
- Compared production responses with the current working tree, including unpublished font, menu and About changes.
- Inspected metadata, headings, canonical URLs, index controls, sitemap, internal links, JSON-LD, image references and visible mobile layouts.
- Used current web-search snapshots for keyword intent, relevant competing pages, brand mentions and listing conflicts. These are not geo-localized Google rank measurements or a complete search-results export.
- No authorized Search Console, GA4, CrUX, Google Business Profile performance, paid keyword or backlink dataset was available. No traffic, keyword volume, difficulty, local-pack position or revenue figures are invented.
- Production returned 403 to the web tool and some default Python requests. Browser-style HTTP requests successfully fetched all five pages and the referenced resources. This does **not** establish a general outage or a verified-Googlebot block. Check Google access using Search Console and authenticated Cloudflare logs.
- The only confirmed hostname failure was www: 522 at the time of testing. Results are time-specific.
- The repository's old `docs/seo/before.json` and `after.json` are historical document snapshots, not evidence of current indexation. No stored drift database was present.
- PageSpeed API's 429 response produced no Lighthouse or field result. File sizes and browser layout checks are not substitutes for LCP/INP/CLS measurements.

Evidence is saved in [evidence/](evidence/). Specialist JSON files retain the initial observations; the implementation status below supersedes recommendations already completed locally.

## 1. Technical audit

### High priority: www hostname fails

`https://www.orkidriaseafood.com/` returned **522** while the apex homepage returned **200**. The Worker can normalize www when a request reaches it, but `wrangler.jsonc` routes only `orkidriaseafood.com/*`. The observed configuration is consistent with www failing to reach the Worker; the Cloudflare DNS/route cause must still be confirmed in the account.

Configure a proxied www hostname with a valid certificate and either a Worker route or a Cloudflare redirect rule. Prefer one permanent redirect to the equivalent apex page, retaining campaign parameters. Do not point public DNS to localhost. Test both HTTP and HTTPS, homepage and an inner page. A passing worker unit test alone cannot verify DNS or routing. [Cloudflare routing](https://developers.cloudflare.com/workers/configuration/routing/routes/)

### High priority: local improvements are not live

| Page | Production observed | Local preview observed |
| --- | --- | --- |
| About | Older title, 2 images, 155 main-content words | Sourced history and four chapters, 5 images, 417 main-content words |
| Menu | 1 image | 7 images, six photographic highlights |
| Visit | Older content, 26 images | Curated 24-image page, plus new visitor answers from this audit |
| Shared design | Earlier assets | Fraunces/Figtree, accessibility and launch improvements |

Word counts are descriptive, not targets or evidence of quality by themselves. Search engines and journalists cannot see unpublished local content. Finish factual/photo checks, review the diff, publish and then inspect the exact public URLs. Do not submit localhost to Search Console.

### Fixed locally: campaign attribution

Production `/?utm_source=audit` redirected to `/`, removing the attribution before browser analytics could observe it. The local Worker now preserves query parameters through canonical host/path redirects and removes only the known preview flags `release`, `alignment`, `font`, `story`. HTML canonicals remain clean and query-free. OAuth, API cursors, asset queries and unknown-page behavior retain their existing handling.

Two regression tests cover campaign-bearing redirects and canonical campaign URLs, including repeated parameters. **40 tests pass.** Deploy before distributing measured PR/social campaign links. A preserved UTM is useful only once analytics or another attribution system is configured. [Campaign parameters](https://support.google.com/analytics/answer/10917952), [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### Passed checks

- All five canonical public pages returned 200.
- Public pages are ordinary server-delivered HTML; critical copy and navigation do not depend on a client framework render.
- Unique titles/descriptions and one H1 per page; canonical and Open Graph URLs use the apex HTTPS domain.
- No accidental public noindex found. Robots allows public content and disallows `/admin/` and `/api/`.
- Sitemap lists exactly the five intended canonical pages and is linked from robots.txt.
- HTTP, known index.html aliases, slash aliases and the observed workers.dev hostname normalize as expected.
- Unknown URLs return a real 404, rather than a 200 homepage fallback.
- Referenced live resources: **81/81 returned 200** with the verified browser-style request method. No local missing image reference was found.
- Internal navigation reaches all pages directly. Contextual links connect menu, visit, history and reservations.
- Admin/API protections are separate; public documents do not expose secrets in the inspected HTML.

### Lower-priority engineering backlog

- **Branded 404:** the deployed unknown-page response was empty although `404.html` exists locally. Confirm Cloudflare static-assets `not_found_handling: "404-page"` support/configuration before applying it; retain HTTP 404 and noindex.
- **Public security headers:** add and test appropriate `nosniff`, referrer and frame policies. Test CSP without breaking fonts, structured data or map embeds; fix HTTPS hostname coverage before enabling broad HSTS. This is security hygiene, not a claimed direct ranking boost.
- **Caching:** static assets currently use revalidation rather than a long immutable lifetime. Consider content-hashed asset URLs before extending cache lifetimes. Do not apply immutable caching to files that change at the same URL.
- **Analytics:** no gtag/GTM/custom conversion tracking implementation was found. Choose a suitable measurement setup and required consent/privacy handling; do not add a guessed account identifier.

## 2. Performance, images and mobile experience

### What was actually checked

All five local public pages were inspected at **390px** width without horizontal overflow. The homepage was also checked at desktop width. Images have alt attributes and explicit dimensions; decorative rotating-card images intentionally have empty alt text, while their links have accessible labels. The leading hero is high priority; below-fold photographs use responsive WebP and lazy loading. The local interface has a motion-pause control and reduced-motion support.

On the mobile homepage, the primary call button began around **1062px from the document top** in an **844px-high** viewport: below the initial screen. The 710px hero and feature cards push an important task down. Consider a compact call/directions row near the introductory text or a carefully tested mobile action bar. Preserve readable content and avoid obscuring the page. This is a conversion/usability recommendation, not a diagnosed Google penalty.

### Image delivery opportunity

All 16 homepage image elements were loaded when inspected, including opacity-hidden slides carrying `loading="lazy"`. Overlaid images share a near-viewport position, so lazy loading is not a reliable guarantee that later slides will wait. Duplicate URLs may be cached; 16 elements do not necessarily mean 16 distinct transfers.

| Local page | Image elements | Sum of unique full-size `src` files |
| --- | ---: | ---: |
| Home | 16 | 1.85 MB |
| Menu | 7 | 1.02 MB |
| About | 5 | 0.96 MB |
| Visit/gallery | 24 | 3.84 MB |
| Reservations | 1 | 0.08 MB |

These totals are **asset inventory, not measured page-transfer bytes**. `srcset`, viewport, cache and scroll position change actual loading. Largest assets include the pavilion and tanks at about 353 KB each. A useful next engineering experiment is to keep the first hero directly in HTML and load inactive slides only when needed, with a no-JavaScript fallback and no empty transition flashes. Measure before/after on a real mobile network.

### CWV verification still required

Use the live domain in PageSpeed Insights with an available quota, then inspect CrUX/Search Console when the origin has sufficient real-user data. Record LCP, INP and CLS at the 75th percentile separately for mobile and desktop. Google's good thresholds are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1. A local fast load or a high Lighthouse lab score does not prove field CWV pass. [Google guidance](https://developers.google.com/search/docs/appearance/core-web-vitals)

### Photography is a launch dependency

The source ledger identifies directory/review images whose reuse permission remains unresolved. Provenance and a public URL are not proof of permission. Obtain rights or replace them with commissioned restaurant photography before press distribution. This is an asset-readiness issue; no automatic SEO penalty is asserted. See the photo brief in [PR-CONTENT-KIT.md](PR-CONTENT-KIT.md).

## 3. Content, trust and visitor intent

The local copy is concise, truthful about menu highlights and careful about reservation confirmation. The expanded About page attributes historical facts and labels current images as current. Keep this restraint. More words are valuable only when they answer an actual visitor question.

| Page | Role | Gap | Best next content |
| --- | --- | --- | --- |
| `/` | Brand and local discovery | Main actions below the mobile fold; limited distinction | Short practical location/category statement plus accessible call/menu/directions actions |
| `/menu/` | Food, price and suitability | Photographs do not provide a maintained menu | Owner-approved dish names, preparations, portions, prices/weight units or accurate market-price policy, fees and review date |
| `/restaurant/` | Current location and arrival | Old-location confusion, unconfirmed practical details | Relocation answer added locally; next verify map entrance, postcode, parking, step-free access and holiday arrangements |
| `/reservation/` | Enquiry and group planning | Actual booking rules not documented | Confirm response process, deposits/cancellations if any, group arrangements and dietary enquiry process |
| `/about/` | History and confidence | Current first-hand voice is missing | Approved owner/chef interview, real names/roles and licensed archival material |

Do not publish a founder biography, legal company identity, exact reopening date, halal certification, catch origin, awards, group capacity or accessibility promise without evidence. Do not call a water-feature setting “beachfront.” The research ledger explains the unresolved early family accounts and postcode difference.

### Local-search identity and citation drift

| Source checked | Observed issue | Recommended action |
| --- | --- | --- |
| [Sluurpy](https://www.sluurpy.com/en/pantai-cenang/restaurant/4688321/orkid-ria-seafood-restaurant) | Old Cenang address, landline and hours | Request an owner-backed current listing correction |
| [Petit Futé](https://www.petitfute.com/v38125-pantai-cenang-pantai-tengah/c1165-restaurants/c1248-specialites/c116-restaurant-fruits-de-mer-poissons/1634874-orkid-ria-seafood.html) | Old phone and split hours | Supply approved current details |
| [Tripmoo](https://tripmoo.net/en-malaysia-langkawi-orkid-ria-seafood/) | 2026-labelled page still points to Cenang | Ask for a dated current-location correction |
| [Wanderlog](https://wanderlog.com/place/details/838500/orkid-ria-seafood-restaurant) | Current contact details mixed with Cenang prose | Clarify current venue versus historical description |
| [Langkawi App](https://langkawi.app/business/orkid-ria-seafood-restaurant) | Current core details match; some facilities claims unconfirmed | Confirm rather than blindly importing all claims |
| [Current Tripadvisor listing](https://www.tripadvisor.com.br/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html) | Public localized snapshot labels it unclaimed | Owner should verify account status and manage the eligible existing profile |

Do not rewrite genuine historical reviews or create duplicate business profiles to escape old information. Verify the correct current Google Business Profile, real-world business name, primary category, location pin, website/menu links and special hours. Google identifies relevance, distance and prominence as local-ranking factors; distance cannot be engineered away with extra “near me” pages. [Google local guidance](https://support.google.com/business/answer/7091)

Request genuine customer feedback neutrally, without rewards or filtering for positive experiences. Keep the website's Google review component hidden until a real authorized API connection succeeds. Own-business review markup is not a route to self-serving star snippets. [Review policy](https://support.google.com/contributionpolicy/answer/7400114), [review markup guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

## 4. Keyword research and page ownership

Priorities reflect visitor intent and business relevance, **not measured search volume**. No page should try to rank for every query. Use the current five-page structure first.

| Priority | Query theme | Primary destination | Why it matters |
| --- | --- | --- | --- |
| 1 | Orkid Ria menu; menu prices | `/menu/` | Direct pre-visit food/budget decision |
| 1 | Orkid Ria location; new location; opening hours | `/restaurant/` | Resolves demonstrable confusion and helps guests arrive |
| 1 | Seafood restaurant Pantai Tengah; Orkid Ria Langkawi | `/` | Best match to the real business and locality |
| 2 | Seafood restaurant Langkawi | `/` | Broader discovery, with more competitive/mixed intent |
| 2 | Orkid Ria reservation; phone; WhatsApp; group booking | `/reservation/` | Converts interest into a visit request |
| 2 | Orkid Ria history; story; dining experience | `/about/` | Brand confidence and support for editorial coverage |

The editable [KEYWORD-MAP.csv](KEYWORD-MAP.csv) includes supporting terms, actions and exclusions. Query variants are grouped semantically; no paid pairwise SERP-overlap clustering was available.

### Competitive evidence

- [Telaga's menu](https://telagaseafood.my/menu) and [reservation page](https://telagaseafood.my/reserve) expose update information, named dishes, preparations, per-weight pricing/minimums and meal sets. This is a practical information benchmark, not evidence that it outranks Orkid Ria for every query.
- [Unkaizan's grill category](https://unkaizan.com/en/grill/) explains dishes and preparation, with seasonal caveats. Learn from clarity; do not copy its menu or claims.
- [Tripadvisor's area category](https://www.tripadvisor.com/Restaurants-g2053325-c33-Pantai_Tengah_Langkawi_Langkawi_District_Kedah.html) illustrates comparison intent. Earn inclusion in useful independent guides rather than write a supposedly impartial “best restaurants” page that awards yourself first place.

### Content sequence

1. Expand the existing menu with approved operational facts and a “how ordering works” section.
2. Complete Visit answers and arrival photographs; the current-location answer is now implemented locally.
3. Add useful group booking details to Reservations.
4. Enrich About with an original approved interview and records.
5. Only then consider occasional kitchen-led articles explaining a real seasonal dish or process. A journal without first-hand material and maintenance capacity is not a priority.

Bahasa Malaysia terms such as “restoran makanan laut Langkawi” and Chinese terms such as “兰卡威海鲜餐厅” are research hypotheses. Validate guest needs and Search Console queries before commissioning full human-reviewed translations and hreflang. Do not scatter disconnected translations or make duplicate location pages for Kuah, Cenang and every nearby hotel.

## 5. Structured data and AI-search readiness

Restaurant identity, telephone, address, opening hours, image, map and social references are consistent in inspected JSON-LD. Breadcrumbs support inner pages. The local schema includes Google's documented `menu` property alongside `hasMenu`. Publish it with the reviewed site. Add coordinates and price information only after verification; parseable JSON-LD is not the same as a completed Google Rich Results Test or guaranteed display.

Useful AI-search work is ordinary reliable publishing: concise current facts in visible HTML, clear questions/answers, stable URLs, original evidence and accurate external mentions. No AI citation frequency was measured. No special AI schema or `llms.txt` is required for Google's AI features. [Google AI features](https://developers.google.com/search/docs/appearance/ai-features)

**Current policy correction:** Google discontinued FAQ rich results from 7 May 2026 and removed the documentation in June. Older SEO advice about adding restaurant FAQ markup for rich results is obsolete. The Visit answers added here are normal visible content; no FAQ rich-result promise or unnecessary schema was added. [Official update log](https://developers.google.com/search/updates)

## 6. PR: useful exposure rather than purchased ranking links

The most defensible angles are the restaurant's documented Langkawi history, its present Pantai Tengah location, and a practical demonstration of choosing a shared seafood meal. The 2024/2025 return is not new-opening news in October 2026.

[PR-CONTENT-KIT.md](PR-CONTENT-KIT.md) contains a 319-word backgrounder, a short boilerplate, two tailored unsent pitch emails, a listing-correction request, a Google Business Profile description, three owned-channel post drafts, a photography brief and verified contact routes. Proposed outlets are The Star Lifestyle/Travel, The National and Langkawi App; editorial interest is unconfirmed.

Publish working canonical pages and prepare a fact sheet first. Secure an actual spokesperson before offering an interview. Ask editors to use accurate information, not to provide favorable coverage or exact-match links. Paid coverage must be disclosed and links appropriately qualified. Avoid mass press-release syndication as a ranking tactic. [Google link-spam policy](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)

## 7. Measurement and acceptance criteria

Create an authorized Search Console domain property, submit the production sitemap and inspect each public page. Export a 28-day and 90-day baseline by page, device, country and query; separate brand, menu, location, reservations and non-brand discovery. A sitemap submission is not proof of indexing. Use normal URL inspection/recrawl workflows, not the restricted Indexing API for restaurant pages.

Define click-to-call, WhatsApp start, directions and menu engagement in the selected analytics system. A click is **not** a completed reservation. Where practical, have the restaurant record confirmed enquiries/bookings and source separately without exporting customer private information into public reports.

For PR-owned campaign links, use a stable convention such as `utm_source=instagram&utm_medium=social&utm_campaign=pantai_tengah`. An independent editor chooses whether to use a tagged link; do not require one. Compare qualified referrals and business outcomes rather than raw link count.

Review at 30/60/90 days. Targets at this stage are implementation and measurement outcomes: healthy domain variants, consistent live facts, a maintained HTML menu, indexed canonical pages, functioning enquiry events, resolved key listing errors and relevant editorial conversations. Numeric traffic or ranking targets should follow a real baseline and seasonality review.

## Deliverables and status

- [ACTION-PLAN.md](ACTION-PLAN.md): priorities, owners, effort, acceptance tests and 90-day sequence.
- [KEYWORD-MAP.csv](KEYWORD-MAP.csv): five-page query ownership.
- [PR-CONTENT-KIT.md](PR-CONTENT-KIT.md): ready-to-review business copy and unsent pitches.
- [Evidence](evidence/): raw technical, content, keyword and resource findings.
- [Mobile homepage](screenshots/home-mobile.png), [desktop homepage](screenshots/home-desktop.png), [Visit answers on mobile](screenshots/visit-answers-mobile.png).
- Local code changes this audit: `server/worker.js`, `tests/seo-technical.test.mjs`, `restaurant/index.html`, `styles.css`. Earlier uncommitted work was preserved.
- **Verified:** production route/resource checks; local mobile rendering; 40 automated tests; build and whitespace validation. **Not verified:** live deployment of changes, Google indexation, live reviews connection, field CWV, business ownership or actual enquiry attribution.

A shareable PDF edition can be generated from this report if needed.

---
Skill attribution: Built by agricidaniel — [AI Marketing Hub, free](https://www.skool.com/ai-marketing-hub) · [Pro](https://www.skool.com/ai-marketing-hub-pro).
