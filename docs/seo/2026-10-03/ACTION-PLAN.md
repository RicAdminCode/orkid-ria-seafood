# Orkid Ria — SEO action plan

Prepared 3 October 2026. Priorities reflect observed visitor/search risk and business relevance. Effort estimates are planning judgments, exclude approval delays, and are not ranking forecasts.

## Ranked work

| Priority | Action | Owner | Effort | State / acceptance check |
| --- | --- | --- | --- | --- |
| High | Repair www hostname | Cloudflare administrator + engineer | 1–2 hours after access | Pending. HTTP/HTTPS www and an inner-page URL reach the matching HTTPS apex URL without 522 or loops; campaign parameters survive |
| High | Publish reviewed launch changes | Owner approves facts/assets; engineer deploys | Half day plus approvals | Pending. Production About/menu/Visit match preview; favicon/assets200; all canonicals correct; no admin/secret assets included |
| High | Publish verified HTML menu | Restaurant manager + content/frontend | 1–2 days after facts arrive | Pending owner menu. Named dishes, preparations, units/portions, price/market-price policy, taxes/charges, currentness date, availability and contact action |
| High | Approve one business fact sheet | Restaurant owner | 30–60 minutes | Confirm name, current address/postcode, pin, phone/WhatsApp, hours/last orders, holidays, parking/access, booking rules |
| High | Resolve image rights | Owner + photographer | Variable | Written website/press/social permission and credits, or replacement owned photographs; no implied archival imagery |
| High | Verify/manage current GBP and important listings | Owner + SEO | 2–4 hours initial, responses vary | No duplicate profile; current name/category/pin/website/menu/contact/hours. Correction requests logged for Sluurpy, Petit Futé, Tripmoo and Wanderlog |
| Medium | Preserve PR campaign attribution | Engineer | Completed locally | Worker retains query parameters through canonical redirects; preview flags removed; regression tests pass. Still pending deployment |
| Medium | Answer current-location question on Visit | Content/frontend | Completed locally | Three visible answers: location/history distinction, hours, table confirmation. Mobile layout checked; pending deployment |
| Medium | Establish search and enquiry baseline | Authorized owner + analytics implementer | Half day | Search Console domain verified, sitemap submitted, five URLs inspected, query/page exports saved. Call/WhatsApp/directions events tested in chosen analytics setup |
| Medium | Check field/lab mobile performance | Engineer + SEO | Half day | Available PSI result and CrUX/Search Console status recorded. Do not mark field pass if insufficient data |
| Medium | Improve mobile contact visibility | Frontend + owner | Half day | Call/directions access easier on390px without obscuring content; keyboard focus/tap targets checked; measure enquiry change |
| Medium | Stage inactive slideshow images | Frontend | Half to one day | Preserve first hero in HTML, load later images deliberately, no blank transitions, reduced-motion/no-JS fallback. Compare actual transferred bytes/LCP under same conditions |
| Medium | Create original reporting material | Owner/chef + photographer/content | 1 day production plus approvals | Named approved interview, current menu demonstration, rights-cleared captions and historical records |
| Medium | Begin tailored editorial outreach | Authorized business spokesperson | 1–2 hours for first batch | Review PR kit, tailor to outlet, record replies/coverage/referrals. No bulk sending, invented quotes, coverage guarantees or bought ranking links |
| Low | Branded404 and public security/caching improvements | Engineer | Half day | True404 plus helpful page; tested headers; long caching only with safe versioning. Not a ranking promise |
| Low | Enrich schema with verified details | Engineer + owner | 1–2 hours | Correct current coordinates/menu/priceRange if verified; Google validation run. No invented aggregateRating or stale prices |
| Later | Human-reviewed language versions | Owner + translator + SEO | Scope after demand review | Use actual guest/query evidence, complete translated pages, correct hreflang/canonicals; no keyword-only translations |

## First 7 days: establish a reliable public reference

1. Owner completes the fact sheet below and clears the image set.
2. Cloudflare administrator fixes www DNS/routing and tests all variants.
3. Review and deploy the existing launch branch plus the two audit improvements. Confirm all five public pages and assets directly.
4. Verify Search Console and the correct existing Google Business Profile. Save baseline exports where data exists.
5. Begin the current HTML menu from the approved source; do not reuse prices from old travel blogs.
6. Correct owned social/location facts before requesting external listing updates.

**Exit condition:** public information matches reality, canonical URLs work, menu work has an approved factual source and measurement ownership is established.

## Days 8–30: answer the questions that decide a visit

- Publish and maintain the full menu/pricing explanation; add verified parking/access/booking details in their existing pages.
- Submit correction requests for the four conflicting active listings. Retain historical articles with dated correction notes rather than rewriting their past.
- Capture original menu/process/venue photos and an owner interview.
- Run mobile performance testing; stage offscreen slideshow content if transfer/LCP evidence supports it.
- Review the PR kit and send a small set of tailored pitches from an authorized business account only after explicit sending approval.

**Exit condition:** visitors can decide what to order, how to arrive and how to request a table without relying on old third-party pages.

## Days 31–60: evaluate actual search and enquiries

- Review Search Console brand/non-brand query groups, page impressions/clicks and indexing. Interpret country/device differences and seasonality.
- Verify call/WhatsApp/directions event quality and compare with actual enquiry records where possible.
- Follow up unresolved important listing corrections once; continue neutral review requests and helpful responses.
- Publish one original interview or kitchen story only if the reporting material is ready.
- Measure editorial referrals and accurate mentions. Do not buy link packages to fill a quota.

## Days 61–90: invest where evidence shows demand

- Improve pages attracting relevant impressions but failing to answer the query or convert enquiries.
- Consider full Bahasa Malaysia/Chinese versions if guest needs and query evidence justify the ongoing translation work.
- Refresh menu data and operating hours through a named restaurant owner/editor.
- Re-audit canonical URLs, domain variants, sitemap, redirects and content drift after changes.
- Set numeric next-quarter business targets from the now-observed baseline, rather than promising first-place rankings.

## Owner fact sheet — complete once, reuse everywhere

| Field | Current working information | Owner confirmation needed |
| --- | --- | --- |
| Trading/legal identity | Orkid Ria Seafood Restaurant | Legal company name, exact English/Chinese brand, authorized spokesperson |
| Address | Lot418, Jalan Pantai Tengah, Jalan Teluk Baru, Mukim Kedawang, Langkawi | Confirm07100 versus07000, entrance map pin, arrival landmark |
| Contact | +6017-6144128; WhatsApp link uses same number | Confirm receiving number, WhatsApp availability and response arrangements |
| Hours | Daily13:00–23:00 | Confirm kitchen last order, holidays and exceptions |
| Food | Photo highlights and selection process | Full current menu, preparations, portions/weight units, fees, current prices/market-price policy |
| Facilities | Indoor/outdoor spaces, water feature visible | Parking, access/toilets, payment methods, capacity and seating requests |
| Reservations | Contact request with date/time/party size | Confirmation process, deposits/cancellations if applicable, actual group limits |
| History | Attributed1989/2004 milestones; return reported2024/2025 | Founder identity, continuity, exact reopening date, archive records |
| Assets | Review/directory photo provenance recorded | Commercial reuse permission or replacement owned images, credits, official social handles |

## Measurement contract

- **Organic:** canonical-page indexation; brand vs non-brand impressions/clicks; menu/location/reservation query groups; device/country context.
- **Enquiries:** call clicks, WhatsApp starts, directions clicks, and confirmed bookings when observable. Do not equate clicks with bookings.
- **PR:** relevant accurate mentions, editorial coverage, referrals and enquiries. A missing followed link does not make useful coverage worthless.
- **Performance:** field LCP/INP/CLS when available; controlled lab results separately labelled.
- **No invented baseline:** record missing data explicitly. Neither a `site:` search nor a sitemap submission proves all pages are indexed.

No account change, outreach message, publication or deployment was made during this audit. The website fixes are reviewable locally.
