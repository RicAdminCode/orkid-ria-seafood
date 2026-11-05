# Application development

## Current stack

| Layer | Implementation |
| --- | --- |
| Public website | React + TypeScript pages, TanStack Router, TanStack Query, shared CSS and prefixed Tailwind utilities |
| Backend | Cloudflare Worker, `server/worker.js`; Google integration and security helpers in `server/` |
| Database | Cloudflare D1 (SQLite), accessed through the `DB` binding and prepared SQL statements |
| Database changes | Versioned SQL files in `migrations/`, applied with Wrangler |
| Hosting | Cloudflare Workers and its static asset binding; public HTML is pre-rendered and assets are bundled into `dist/` using an explicit allowlist |
| Tooling | Node 22.22+, pnpm 10.33.0, Wrangler; strict TypeScript checking for frontend components and new backend modules |
| Tests | Node test runner, Happy DOM, and in-memory SQLite for backend tests |

## Tailwind and TanStack integration

Tailwind CSS is compiled from `frontend/tailwind.css` during `pnpm build` and appended to the existing `dist/styles.css`. Existing HTML and styling classes are preserved. The Preflight reset is omitted and all Tailwind utilities and theme variables use the `tw` prefix, avoiding collisions with existing classes such as `container` or `hidden`. Add complete utility classes such as `tw:flex`, `tw:gap-4` or `tw:md:grid-cols-2` to new feature markup; the source list includes the React page components and the rest of `frontend/`. Add sources there if future UI files live elsewhere. Existing unlayered site CSS retains priority over utilities when both apply, so use new components or deliberately scoped overrides when needed.

TanStack Router owns all five public routes and the 404 view. React components live in `frontend/pages/`; internal page links use typed TanStack `Link` components. The build pre-renders each route with a request-isolated memory router and hydrates it with `frontend/main.tsx`. Existing page content, public URLs and styles are retained. `#app` uses `display:contents` so its wrapper does not introduce a layout box.

Each application router owns a TanStack QueryClient and wraps its route tree in QueryClientProvider. Future React features can use `useQuery` and the router context. The existing reviews widget also uses Query Core with its own short-lived client. Refresh clears its pages; failures keep manual retry; disposal clears its in-memory queries. Reviews remain hidden as before. No customer data is persisted in browser storage.

`app.js` exposes `mountInteractions()` with a cleanup function. Route lifecycle effects remove document/window/media listeners, timers, observers and cloned carousel cards before replacing a page. Titles, descriptions, canonicals and structured data update during client navigation. Focus moves to the new main content; Router handles scroll restoration. API/admin routes continue to be handled by the Worker rather than the public router.

The current pre-renderer supports static public page content. Before adding asynchronous server-side route loaders or query-backed SSR, implement TanStack Router/Query dehydration and hydration; do not embed customer data in publicly pre-rendered pages. The static pre-renderer mirrors the client router's Suspense boundary, covered by browser hydration checks. No TanStack Start server framework was introduced.

`scripts/build.mjs` bundles the React application into `dist/application.js` using esbuild. The old source HTML pages have been replaced with `.tsx` components; edit those components and `metadata.ts`, never `dist/`. `pnpm test` builds first, so tests inspect the actual pre-rendered HTML and asset paths. Content parity fixtures preserve original text, image attributes and link destinations for all five routes.

References: [Tailwind without Preflight](https://tailwindcss.com/docs/preflight#disabling-preflight), [TanStack Router](https://tanstack.com/router/latest/docs/quick-start), [TanStack QueryClient](https://tanstack.com/query/latest/docs/framework/react/reference/QueryClient).

## TypeScript coverage

The public page components, route tree and browser entry use TypeScript/TSX and are checked in strict mode by `tsconfig.frontend.json`. Backend `.ts` modules are checked by `tsconfig.json`; existing backend and shared interaction helpers remain JavaScript. `server/types.ts` provides application environment types using generated Cloudflare binding and runtime declarations. Wrangler bundles imported TypeScript modules when building the Worker.

`tsconfig.json` permits legacy JavaScript but does not type-check its bodies (`checkJs: false`). A passing type check does **not** mean the existing JavaScript has been converted or fully type-checked. Convert one existing module with its callers and tests when changing its behavior. Frontend TypeScript uses a separate DOM/React configuration to avoid mixing browser and Worker globals.

Run `pnpm types` after changing Worker bindings. `worker-configuration.d.ts` is generated and ignored by Git; `pnpm typecheck` regenerates it, so CI does not depend on local files. Import `Env` from `server/types.ts` for new backend modules. `SITE_ORIGIN` is a string so local development and production can use different origins. Google credentials are optional because unconfigured local development is supported; validate required credentials before using an integration.

## Daily commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm check
```

`pnpm check` runs generated types, strict TypeScript checking for TypeScript modules, all tests, the public asset build, and `wrangler deploy --dry-run`. It does not apply migrations or publish a release. The GitHub workflow runs it on pushes and pull requests. Deployment runs the same checks before the existing production migration/deploy steps.

## Database workflow

```sh
pnpm db:create add_reservations
# Edit the new SQL migration before applying it.
pnpm db:migrate
pnpm dev
```

`db:migrate` explicitly uses the local D1 database. Local records do not become production records. Never edit an already deployed migration; add another migration. Backend tests use an isolated in-memory database. When adding a migration, update their schema setup to include it and test constraints, transaction rollback and access restrictions for the feature.

The current production D1 database is `orkid-ria-reviews`. Its existing tables (`settings`, `oauth_states`, `rate_limits`) support Google reviews only. Create domain tables such as reservations or orders when those features are designed. Use prepared statements with bound values and database constraints for invariants. Use D1 transactional batches when related writes must succeed together.

The reviews disconnect operation deletes only its connection, location and revision settings. Other settings survive disconnect. OAuth state remains dedicated to this integration; a future login system needs its own sessions and state storage.

## Before building the application features

The current stack can host database APIs, but these application capabilities are not implemented:

- Customer accounts, session management and per-user or staff-role authorization. Existing HTTP Basic authentication protects only the reviews administration screens.
- Reservation, order and payment domain schemas, validation, APIs and management screens. The current reservation page uses contact links; it does not create a database booking.
- A separate staging Worker and D1 database. Test application migrations against staging before production; no staging resources were created by this readiness work.
- Payment provider integration, verified webhook signatures and idempotency, or transactional order processing. Select these when the payment workflow is defined.

Route new APIs explicitly in `server/worker.js`. Its current `/api/*` checks and public quota were designed for reviews; design authentication and rate budgets for new routes rather than treating those quotas as appropriate for all application traffic. Validate untrusted input at each API boundary, and enforce record ownership in database queries. Keep secrets in Wrangler secrets and ignored `.dev.vars`, never public assets.

Add application screens as typed routes and React components. React, Router and Query are installed; an ORM is not installed. Add domain tables and APIs when the feature requirements are defined. TypeScript does not require replacing the public website or the hosting provider.

## Official references

- [Cloudflare Workers TypeScript](https://developers.cloudflare.com/workers/languages/typescript/)
- [D1 local development](https://developers.cloudflare.com/d1/best-practices/local-development/)
- [D1 migrations](https://developers.cloudflare.com/d1/reference/migrations/)
