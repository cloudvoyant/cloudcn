# cloudcn architecture

## Monorepo layout

cloudcn is a pnpm workspace monorepo:

- `libs/cloudcn-react` — React UI component library (placeholder: `helloReact`). Publishes to npm.
- `libs/cloudcn-svelte` — Svelte UI component library (placeholder: `helloSvelte`). Publishes to npm.
- `apps/cloudcn-docs` — docs/demo app, `private: true` (never published). Prints `hello`; will become an HMR Astro app.

## Workspace config

- `pnpm-workspace.yaml` — workspace globs (`apps/*`, `libs/*`), shared dependency catalog (`catalogMode: manual`).
- `tsconfig.base.json` — shared strict TypeScript base; each package extends it.
- `version.txt` — single source of truth for the lockstep version shared by all packages.
- `mise-tasks/set-version` — fans a version out to every `libs/*/package.json` and `apps/*/package.json`.

## Release pipeline

- `.releaserc.json` — semantic-release. Release rules cap every bump at `minor` (stay-at-v0; the project is a new/experimental lib).
- `mise-tasks/upversion` — runs semantic-release (seeds `v0.0.0` when no version tag exists).
- `mise-tasks/publish` / `publish:rc` — publish public workspace packages to npm (skips private, idempotent).
- `.github/workflows/ci.yml` — CI (install, test, format, lint, RC publish on non-main pushes).
- `.github/workflows/release.yml` — release on main (upversion, build, npm publish, GitHub release).

## CI secrets

- `NPM_TOKEN` — used as `NODE_AUTH_TOKEN` for publishing to npm.
