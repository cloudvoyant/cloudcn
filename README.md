# cloudcn

cloudcn is a pnpm workspace monorepo for a cross-framework UI component library (React + Svelte) with an Astro docs/demo site.

## Structure

- `libs/cloudcn-core` — shared interfaces, cva variants (`buttonVariants`), `cn`, and the shadcn-style theme (light + dark)
- `libs/cloudcn-react` — React components built on Ark UI (Button)
- `libs/cloudcn-svelte` — Svelte components built on Ark UI (Button)
- `apps/cloudcn-docs` — Astro docs/demo site with MDX docs, framework selector, and live demos

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
