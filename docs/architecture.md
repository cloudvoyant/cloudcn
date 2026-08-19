# cloudcn architecture

## Monorepo layout

cloudcn is a pnpm workspace monorepo:

- `libs/cloudcn-core` — shared interfaces, cva variants (`buttonVariants`), `cn` utility, and the shadcn-style theme (CSS variables, light + dark). Publishes to npm.
- `libs/cloudcn-react` — React UI components built on Ark UI (`Button`). Publishes to npm.
- `libs/cloudcn-svelte` — Svelte UI components built on Ark UI (`Button`), packaged with `@sveltejs/package`. Publishes to npm.
- `apps/cloudcn-docs` — Astro docs/demo app, `private: true` (never published). MDX content collection, shadcn-style shell, React/Svelte framework selector, live component demos.

## Workspace config

- `pnpm-workspace.yaml` — workspace globs (`apps/*`, `libs/*`), shared dependency catalog (`catalogMode: manual`).
- `tsconfig.base.json` — shared strict TypeScript base; each package extends it.
- `version.txt` — single source of truth for the lockstep version shared by all packages.
- `mise-tasks/set-version` — fans a version out to every `libs/*/package.json` and `apps/*/package.json`.

## Docs app conventions

- `apps/cloudcn-docs` uses Astro 7 with `@astrojs/react`, `@astrojs/svelte`, `@astrojs/mdx`, and Tailwind v4 via `@tailwindcss/vite`.
- The theme lives in `cloudcn-core/src/theme.css` and matches shadcn/ui's implementation exactly at this stage (CSS variables under `:root`/`.dark`, `@theme inline`, `@custom-variant dark`).
- The framework selector persists to `localStorage` (`cloudcn:framework`) and sets `data-framework` on `<html>`; `Demo.astro` renders both framework islands and CSS shows the active one.

## Release pipeline

- `.releaserc.json` — semantic-release. Release rules cap every bump at `minor` (stay-at-v0).
- `mise-tasks/upversion` — runs semantic-release.
- `mise-tasks/publish` / `publish:rc` — publish public workspace packages to npm (skips private, idempotent).
- `.github/workflows/ci.yml` — CI (install, test, format, lint, RC publish on non-main pushes).
- `.github/workflows/release.yml` — release on main.

## CI secrets

- `NPM_TOKEN` — used as `NODE_AUTH_TOKEN` for publishing to npm.
