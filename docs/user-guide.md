# User Guide

> How to install and use wicn.

## Requirements

- [mise](https://mise.jdx.dev/) — manages Node.js and pnpm versions
- Node.js LTS and pnpm are installed automatically by mise via `mise install`

## Getting Started

```text
mise install
mise run install
mise run build
mise run dev   # opens the Astro docs site
```

## Workspace (pnpm monorepo)

wicn is a pnpm workspace monorepo:

- Install everything: `mise run install`
- Build all packages: `mise run build`
- Test all packages: `mise run test`
- Lint/format all packages: `mise run lint`, `mise run format:check`
- Run the docs site: `mise run dev` (Astro), then open the printed URL
- Show the current version: `mise run version`
- Set the lockstep version across all packages: `mise run set-version <version>`

## Using the packages

```text
pnpm add wicn-core wicn-react
# or for Svelte
pnpm add wicn-core wicn-svelte
```

Import the theme once in your global CSS:

```css
@import 'tailwindcss';
@import 'wicn-core/theme.css';
/* Tailwind doesn't scan node_modules by default — point at wicn-core so its
   cva class strings (bg-primary, h-10, …) get generated. Path is relative to
   your global CSS file. */
@source '../../node_modules/wicn-core/dist';
```

Components accept the same `variant` and `size` props across frameworks. Available components:

- `Button` — `variant` (`solid`/`outline`/`text`), `color`, `size`
- `ToggleButton` — `variant` (`default`/`outline`), `size`
- `Badge` — `variant` (`solid`/`subtle`/`outline`/`surface`/`plain`), `color`, `size`
- `Navbar` — `variant` (`sticky`/`floating`), composed parts for brand, menu, actions, and mobile trigger
- `NavMenu` — composed parts for menus with dropdown panels
- `Tabs` — composed parts for tabbed content
- `Pagination` — composed parts for paging through content

Every component accepts `className`/`class` and merges it with the shared variant classes, so consumers can restyle individual instances and override the whole theme via CSS variables.

All packages share one lockstep version from `version.txt`; the project stays at v0 until the release-rule cap is deliberately removed.
