# helix

[![npm version](https://img.shields.io/npm/v/@cloudvoyant/helix-react.svg)](https://www.npmjs.com/package/@cloudvoyant/helix-react)

helix is a pnpm workspace monorepo for a cross-framework UI component library (React + Svelte) with an Astro docs/demo site.

## Docs

The docs site is published to GitHub Pages at [https://cloudvoyant.github.io/helix/](https://cloudvoyant.github.io/helix/).

## Structure

- `libs/helix` — shared interfaces, cva variants (`buttonVariants`, `toggleButtonVariants`, `badgeVariants`), `cn`, and the shadcn-style theme (light + dark)
- `libs/helix-react` — React components built on Ark UI (Button, ToggleButton, Badge)
- `libs/helix-svelte` — Svelte components built on Ark UI (Button, ToggleButton, Badge)
- `apps/docs` — Astro docs/demo site with MDX docs, framework selector, and live demos

## Getting started

```text
mise run install   # install all workspace deps
mise run build     # build every package
mise run test      # run vitest across the workspace
mise run lint      # eslint + tsc/svelte-check across the workspace
mise run format:check
```

Run the docs site:

```text
mise run dev       # Astro dev server (docs + demos)
```

## Versioning

All packages share one lockstep version sourced from `version.txt` (`mise run set-version <version>` fans it out). The project intentionally stays at v0 — release rules cap every bump at minor, so the first publish is 0.x. See `docs/architecture.md`.
