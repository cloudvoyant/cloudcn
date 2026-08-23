# wicn

wicn is a pnpm workspace monorepo for a cross-framework UI component library (React + Svelte) with an Astro docs/demo site.

## Structure

- `libs/wicn-core` — shared interfaces, cva variants (`buttonVariants`, `toggleButtonVariants`, `badgeVariants`), `cn`, and the shadcn-style theme (light + dark)
- `libs/wicn-react` — React components built on Ark UI (Button, ToggleButton, Badge)
- `libs/wicn-svelte` — Svelte components built on Ark UI (Button, ToggleButton, Badge)
- `apps/wicn-docs` — Astro docs/demo site with MDX docs, framework selector, and live demos

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
