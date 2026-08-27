# helix architecture

## Monorepo layout

helix is a pnpm workspace monorepo:

- `libs/helix` — shared interfaces, cva variants (`buttonVariants`, `toggleButtonVariants`, `badgeVariants`), `cn` utility, and the shadcn-style theme (CSS variables, light + dark). Publishes to npm.
- `libs/helix-react` — React UI components built on Ark UI (Button, ToggleButton, Badge). Publishes to npm.
- `libs/helix-svelte` — Svelte UI components built on Ark UI (Button, ToggleButton, Badge), packaged with `@sveltejs/package`. Publishes to npm.
- `apps/docs` — Astro docs/demo app, `private: true` (never published). MDX content collection, shadcn-style shell, React/Svelte framework selector, live component demos.

## Workspace config

- `pnpm-workspace.yaml` — workspace globs (`apps/*`, `libs/*`), shared dependency catalog (`catalogMode: manual`).
- `tsconfig.base.json` — shared strict TypeScript base; each package extends it.
- `version.txt` — single source of truth for the lockstep version shared by all packages.
- `mise-tasks/set-version` — fans a version out to every `libs/*/package.json` and `apps/*/package.json`.

## Docs app conventions

- `apps/docs` uses Astro 7 with `@astrojs/react`, `@astrojs/svelte`, `@astrojs/mdx`, and Tailwind v4 via `@tailwindcss/vite`.
- The theme lives in `@cloudvoyant/helix/src/theme.css` and matches shadcn/ui's implementation exactly at this stage (CSS variables under `:root`/`.dark`, `@theme inline`, `@custom-variant dark`).
- The framework selector persists to `localStorage` (`helix:framework`) and sets `data-framework` on `<html>`; `Demo.astro` renders both framework islands and CSS shows the active one.

## Component pattern

Every component follows the Button pattern: a shared cva variant function lives in `@cloudvoyant/helix`, and `@cloudvoyant/helix-react`/`@cloudvoyant/helix-svelte` expose thin wrappers that apply `cn(<variants>, className)` over an Ark UI primitive. Composite components (ToggleButton) are composed from per-part exports matching Ark's anatomy.

## Release pipeline

- `.releaserc.json` — semantic-release. Release rules cap every bump at `minor` (stay-at-v0).
- `mise-tasks/upversion` — runs semantic-release.
- `mise-tasks/publish` / `publish:rc` — publish public workspace packages to npm (skips private, idempotent).
- `.github/workflows/ci.yml` — CI (install, test, format, lint, RC publish on non-main pushes).
- `.github/workflows/release.yml` — release on main.

## CI secrets

- `NPM_TOKEN` — used as `NODE_AUTH_TOKEN` for publishing to npm.
