# Google reviews integration

Status: implemented for Cloudflare Workers + static assets + D1. **Not connected to live Google data.** The Worker and D1 schema have been deployed to `https://orkid-ria-seafood.steep-mud-60fb.workers.dev`. No real Google request has been made. The HTML/CSS/JavaScript site remains framework-free. GitHub Pages alone cannot execute this backend; deploy this Worker on the site's Cloudflare domain.

## Official documentation checked on 20 September 2026

- [Business Profile prerequisites](https://developers.google.com/my-business/content/prereqs): project approval required; the applicant must manage a verified, active profile for 60+ days and have a business website. Apply using an owner/manager email and the Cloud project number. OAuth consent approval and Business Profile API access are separate.
- [Basic API setup](https://developers.google.com/my-business/content/basic-setup): enable the approved Business Profile APIs in that project.
- [Reviews list](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list): verified locations only; OAuth `business.manage`; `pageSize` maximum 50; `nextPageToken`, `averageRating`, and `totalReviewCount` supplied by Google. The integration requests six each time, below the 50 maximum, and follows tokens until exhausted. There is no total-review cap or star filter.
- [Web-server OAuth](https://developers.google.com/identity/protocols/oauth2/web-server): server-side code exchange and offline refresh credentials. State, browser binding, PKCE S256, one-use state and exact registered callback URI are implemented.
- [GBP policies](https://developers.google.com/my-business/content/policies): limited temporary content storage only, at most 30 days, securely stored, without manipulation/aggregation. Preserve provided attribution/brand features; do not imply Google endorsement. This implementation does not cache/persist review content or calculate an aggregate rating. It labels the source Google, retains reviewer names, ratings, original text and available photos, and links to Google's returned listing URL. Check policies again before launch; API approval is not granted by this implementation.
- [Location metadata](https://developers.google.com/my-business/reference/businessinformation/rest/v1/locations): `metadata.mapsUri` supplies the public URL. A pasted Maps URL is never treated as API authorisation.
- [Cloudflare static assets](https://developers.cloudflare.com/workers/static-assets/binding/), [D1](https://developers.cloudflare.com/d1/worker-api/prepared-statements/), [Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/).

## Required Google setup

1. Confirm that the restaurant's Business Profile is verified, meets Google's eligibility requirements, and that the connecting Google account is an owner or manager. If acting as an agency, follow Google's third-party/project policies; do not require an end-client project merely to bypass those policies.
2. Create/select a Google Cloud project. Submit **Application for Basic API Access** using the [GBP API contact form](https://support.google.com/business/contact/api_default), project number, and an owner/manager email. Await approval and check the allocated quota (zero indicates no access).
3. Enable **Google My Business API** (`mybusiness.googleapis.com`, v4 reviews), **My Business Account Management API**, and **My Business Business Information API**. Follow Google's current basic setup instructions if the project needs the other GBP APIs enabled. A Places API key is not a substitute.
4. In Google Auth Platform configure branding, audience, support/developer email, authorised domain, and appropriate privacy-policy and terms URLs. Add `https://www.googleapis.com/auth/business.manage` to the OAuth consent configuration. Use Internal only for eligible Workspace-only access; otherwise configure External. Complete verification as Google requires for the audience/scope. Add the owner/manager as a test user during development. External Testing refresh grants can expire after seven days; use the appropriate production publishing/verification process before launch.
5. Create an OAuth client of type **Web application**. Register this exact development redirect URI: `http://localhost:3123/admin/reviews/callback`. Register the exact production URI: `https://YOUR_SITE_DOMAIN/admin/reviews/callback`. No wildcards; protocol, host, port and path must match. Set `SITE_ORIGIN` to the matching origin without a trailing slash. Use a separate development OAuth client/project where appropriate.
6. Save the client ID and secret only in Cloudflare secrets or ignored `.dev.vars`. Never put refresh tokens, client secrets, admin credentials or encryption keys in HTML, Git, build variables injected into JS, or URLs.
7. After deployment, visit `/admin/reviews`. The administrator username is `admin`; the password is the generated `ADMIN_PASSWORD`. Connect Google, sign in as the authorised owner/manager, grant consent, choose the correct account, then verify the restaurant name/address and choose its location. Both account and location selectors have pagination.
8. Selection makes a real reviews request (Google permits this only for verified locations), obtains Google's listing URL, and saves only the selected resource identifier. The public section becomes live only after a successful API response. Check a real review, total count, rating, and View on Google destination before announcing connection.

## Cloudflare setup and deployment

Use Node 22.22+ and pnpm. `pnpm install --frozen-lockfile` installs the pinned toolchain.

```sh
pnpm exec wrangler login
pnpm exec wrangler d1 create orkid-ria-reviews
```

The repository is configured for the existing `orkid-ria-reviews` database in the Novamas Cloudflare account and `https://orkid-ria-seafood.steep-mud-60fb.workers.dev`. For a different account, replace `database_id` with the returned ID. For a custom domain, change `vars.SITE_ORIGIN` to that exact production HTTPS origin. Set up the domain/custom route for this Worker in Cloudflare. D1 is for configuration, encrypted refresh credentials, short-lived OAuth state and rate counters only; no review table exists.

Generate two independent random secrets using your password manager, or run this command separately for each:

```sh
node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"
```

Use one value for `ADMIN_PASSWORD` (at least 32 characters) and the other for `TOKEN_ENCRYPTION_KEY` (exactly 32 bytes encoded as base64url). Store them securely, then enter them interactively:

```sh
pnpm exec wrangler secret put GOOGLE_CLIENT_ID
pnpm exec wrangler secret put GOOGLE_CLIENT_SECRET
pnpm exec wrangler secret put ADMIN_PASSWORD
pnpm exec wrangler secret put TOKEN_ENCRYPTION_KEY
pnpm exec wrangler d1 migrations apply DB --remote
pnpm test
pnpm run deploy
```

`pnpm run deploy` builds an explicit public-file allowlist, applies pending remote D1 migrations, and deploys the Worker and static assets. Set the Cloudflare Build deploy command to `pnpm run deploy`. Never deploy the repository root as a public asset directory. Do not configure CDN caching for `/api/*` or `/admin/*`; responses specify `no-store`. Do not enable request/body tracing or log OAuth callback query strings, Authorization headers, cookies, provider responses or tokens. Worker observability is disabled by default. Cloudflare edge security/rate controls can further protect these paths; do not create an edge cache rule that overrides the headers.

For local development, copy `.dev.vars.example` to `.dev.vars`, replace placeholders if testing OAuth, and keep it ignored. `pnpm dev` builds assets, applies local D1 migrations and serves both site and Worker on port 3123. It works without secrets: the widget shows the truthful not-connected state, and administration is locked. Re-run `pnpm build` after editing static files (Wrangler watches the generated assets). Local credentials/database remain in ignored `.dev.vars` and `.wrangler/`. Do not use the earlier Python root-directory server with secrets present.

## Security and data lifecycle

- Administrator HTTP Basic authentication requires a strong secret and HTTPS outside localhost. Native browser password UI is intentional; rotate `ADMIN_PASSWORD` to invalidate credentials and pending OAuth/CSRF tokens. Close the browser session to clear its cached Basic credentials. A public visitor cannot connect, choose a location or disconnect.
- Mutation forms require same-origin Origin plus an encrypted, expiring CSRF token. OAuth state is encrypted in D1, tied to the initiating HttpOnly/SameSite cookie and admin credential, expires in ten minutes, and is consumed atomically. HTTPS uses Secure cookies. PKCE binds code exchange.
- Refresh tokens use AES-256-GCM authenticated encryption with a server-only key. OAuth access tokens exist only during the request; each request refreshes as necessary without persisting an access token. Key rotation requires disconnect/reconnect; never discard the old key until Google access has been revoked.
- No reviews are cached, prefetched or stored in D1, browser storage, logs or static files. Each page fetch obtains current data. No stale fallback is served on auth/API failure. The open widget replaces loaded pages after five minutes when visible, or upon returning to the tab after that period. Edited/deleted reviews disappear on that refresh. Pagination is a live Google sequence, not an immutable snapshot; concurrent edits may shift results. A failed/expired ten-minute cursor offers a restart from the current first page.
- Google-origin listing metadata is fetched each public request, not stored indefinitely. Only account/location selection identifiers are retained as configuration. Public responses omit tokens, account IDs, owner replies and internal errors.
- Public requests are limited to 30/minute/IP and 50/minute globally using atomic D1 counters. Authenticated administrators have a separate global allowance of 20/minute and 20/minute/IP. At most three Google calls per normal request keeps typical use below the documented default project quota; confirm actual allocated quota. Counters use hashed IPs and expire after two minutes. An hourly cleanup trigger removes expired counters/OAuth state. Under attack the service may return 429; limits intentionally favour protecting Google's quota over unlimited availability.
- Revoked refresh access deletes the local encrypted connection; access denial, quotas, bad cursors, invalid selections and outages fail closed with safe messages. No Google error payload is sent publicly. Reconnect through the administrator page after renewal/API approval.
- Disconnect immediately deletes stored credentials and selection, then attempts Google token revocation. If Google's revocation service is unavailable, the administrator gets explicit instructions to revoke the app in Google Account permissions. Normal D1 recovery backups can retain historical ciphertext; restrict database access and revoke the Google grant so recovered tokens cannot be used. Apply your operational backup/credential-retention policy.

## Verification and troubleshooting

`pnpm test` uses **mocked** Google responses and an in-memory SQLite adapter matching D1 statements. It verifies OAuth state/PKCE/replay, administrator protection, CSRF, encryption, pagination, negative reviews, source URL validation, public field minimisation, quotas, unavailable/revoked access, disconnect, long text, absent dates/photos, DOM XSS handling, refresh and empty/error/loading states. These tests do not establish Google project approval or live API access.

The local Wrangler check verifies the actual Worker/D1/assets wiring with no Google credentials. Browser checks verify the public not-connected layout and native keyboard navigation. Visual success-state checks use an explicitly labelled isolated mock fixture; fixtures are never copied into production assets.

Error guide: `AUTH_REQUIRED` → reconnect/renew owner access; `ACCESS_DENIED` → verify API approval, enabled services, scope and ownership; `GOOGLE_REJECTED`/`INVALID_LOCATION` → verify the selected verified location; `OAUTH_SCOPE_OR_OFFLINE_ACCESS_MISSING` → reconnect with consent and correct scope; `OAUTH_STATE_INVALID` → restart connection in the same browser; `RATE_LIMITED` → wait at least a minute; `UPSTREAM_UNAVAILABLE` → retry and check service availability; `LISTING_UNAVAILABLE` → verify Google's location metadata; `SERVER_CONFIGURATION` → correct exact HTTPS origin/secrets.

Remaining live acceptance: real OAuth consent and callback, real account/location selection, successful Google reviews response, all pages compared with that location, edited/deleted review refresh, live revocation/reconnection, and production HTTPS/domain/Cloudflare configuration. Do not claim these passed until performed with authorised credentials.

To reproduce the isolated browser fixture after `pnpm build`, run `node tests/browser-preview.mjs` and open `http://localhost:3124/#google-reviews`. Stop that process when done; the actual site remains on port 3123 without fixture data.

Completed local checks: 16 mocked automated tests passed; Cloudflare deployment dry run passed; local D1 migration and Worker/asset wiring passed; unauthenticated admin returned 401, private source/secret paths returned 404; mobile review layout checked at 390×844 without horizontal overflow; native Enter/Space expansion and Enter pagination checked in the mock browser fixture. No live Google acceptance checks have run.

The public reviews section is currently hidden at the owner’s request. Its automatic frontend initialisation is skipped while `hidden` is present. After live setup and approval to show it, remove `hidden` from the `data-google-reviews` section in `index.html`, then rebuild/deploy. The isolated mock preview removes that attribute only in its own response.

Production origin and local origin are separate: `pnpm dev` explicitly overrides `SITE_ORIGIN` to `http://localhost:3123`, while deployment uses the production value in `wrangler.jsonc`.
