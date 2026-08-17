# cloudcn

cloudcn is a pnpm workspace monorepo for a UI component library with a docs/demo app.

## Structure

- `libs/cloudcn-react` — React UI components (placeholder: exports `helloReact`)
- `libs/cloudcn-svelte` — Svelte UI components (placeholder: exports `helloSvelte`)
- `apps/cloudcn-docs` — docs/demo app (placeholder: prints `hello`; will become an HMR Astro app)

## Getting started

```bash
mise run install   # install all workspace deps
mise run build     # build every package (tsup -> dist/)
mise run test      # run vitest across the workspace
mise run lint      # eslint + tsc across the workspace
mise run format:check
```

Run the docs placeholder:

```bash
pnpm --filter cloudcn-docs run dev    # prints "hello"
pnpm --filter cloudcn-docs run build  # prints "hello"
pnpm --filter cloudcn-docs run serve  # prints "hello"
```

## Versioning

All packages share one lockstep version sourced from `version.txt` (`mise run set-version <version>` fans it out). The project intentionally stays at v0 — release rules cap every bump at minor, so the first publish is 0.x. See `docs/architecture.md`.
