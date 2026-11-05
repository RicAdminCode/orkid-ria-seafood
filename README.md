# Orkid Ria Seafood Restaurant

React and TypeScript website with TanStack Router, TanStack Query, Tailwind CSS, and a Cloudflare Worker/D1 backend. Public pages are pre-rendered to complete HTML during the build.

## Contents

- Homepage, menu, story, visit, reservation and 404 pages.
- Shared CSS and JavaScript.
- Six local restaurant photographs associated with 2026 reviews.
- Content source and date audit in CONTENT_SOURCES.md.

## Build and hosting

Run `pnpm build` to produce `dist/`. The public HTML is generated from React components; source HTML files are no longer the editing surface. Run `pnpm run deploy` for the configured Cloudflare Worker and D1 deployment. The complete application requires the Worker backend; publishing the repository root through GitHub Pages is not supported.

## Local preview

From the project folder, run:

```sh
pnpm dev
```

Open http://localhost:3123 in your browser. Requires Node 22.22+ and pnpm. Run `pnpm install` first. Local preview now uses Cloudflare Workers and D1; secrets are optional for the not-connected state.

## Editing

Edit `frontend/pages/*.tsx` for page content, `frontend/pages/metadata.ts` for page titles/SEO metadata, `frontend/router.tsx` for routes, and `styles.css` for the existing design. New components can use prefixed Tailwind utilities from `frontend/tailwind.css`. Shared DOM interactions live in `app.js` and are mounted and cleaned up with each route. Images are in `assets/`. Rebuild after editing; `pnpm dev` watches the generated assets, not the source files.

## Application development

See [the stack and application readiness guide](docs/application-development.md) before adding database features. Run `pnpm check` for TypeScript checks, tests, the public asset build and a Worker deployment dry run. CI runs the same command on pushes and pull requests. `pnpm run deploy` runs these checks before production migration and deployment.

## External services and source limitations

Google Fonts requires internet access. The location page embeds Google Maps. Reservations use a telephone link and do not submit online bookings.

Photograph dates refer to associated review publication dates, not verified capture dates. Third-party image reuse rights have not been verified. Contact details and opening hours were checked against current listings without dated update records. See CONTENT_SOURCES.md for evidence.

Keep credentials in ignored local environment files and Cloudflare secrets.

## Google reviews and Cloudflare hosting

See [the complete setup and verification guide](docs/google-reviews.md). Run `pnpm test` for mocked checks and `pnpm build` to create the public asset allowlist. Production Google reviews require approved API access and owner/manager OAuth; no live connection is configured. GitHub Pages cannot run this backend.
