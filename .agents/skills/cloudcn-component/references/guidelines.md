# Guidelines

## Non-negotiables

- **Light and dark capable** — every component must render correctly in both themes.
- **Accessible** — accessibility comes from Ark's state machine; do not hand-roll roles, keyboard handlers, or focus management. Add `aria-label` for icon-only controls.
- **Themeable** — all styling references shadcn CSS variables; never hard-code a color.
- **Sourced, never home-made** — use Ark → Chakra → shadcn sources in that order; never hand-roll a component one of them already provides. Record the source in each file header (see `references/sourcing.md`).

## `cn` for every class merge

Use `cloudcn-core`'s `cn` (clsx + tailwind-merge) to combine variant classes with user `className`/`class`:

```tsx
className={cn(buttonVariants({ variant, color, size }), className)}
```

This makes conflicting utilities resolve last-wins and keeps shadcn-style overrides working.

## Tailwind + shadcn theme

- Style with Tailwind utilities that reference theme tokens (`bg-primary`, `text-muted-foreground`, `border-input`, `bg-primary/90`).
- The theme is the shadcn CSS-variable model in `cloudcn-core/src/theme.css`: `@theme inline` maps `--color-*` to `--background`/`--primary`/etc., with `:root` and `.dark` blocks. Do not diverge from shadcn's implementation.
- New color tokens (e.g. `success`, `danger`, `warn`, `info`) follow shadcn's "adding new tokens" pattern — add the `--color-*` mapping in `@theme inline` and the values in both `:root` and `.dark`.

## cva variant axes

Split props into orthogonal axes, never compound variants:

- `variant` — fill style (`solid` | `outline` | `text`).
- `color` — palette (`primary` | `secondary` | `success` | `danger` | `warn` | `info`).
- `size` — dimensions.

Every color works with every variant. Use `compoundVariants` in cva only for the (variant × color) class matrix.

## Extending the theme

When a component needs a theme token that does not exist, extending `theme.css` is allowed but must be explicit: add the token, and call it out in the component's docs (see `component-docs-template.md`). Do not add tokens silently.

A theme extension means any change that affects theming — new tokens, new variants that add theme-driven colors, or any styling that depends on the CSS variables. In all cases:

- Update the component's docs to state the extension explicitly — what token/variant was added, where (light and dark), and why.
- Check the available themes (light, dark) and any user-defined theme overrides still resolve the new token. If a token is missing from a theme, the component falls back to the base shadcn value — surface that, don't leave it implicit.
- Never require a consumer to add CSS themselves; the extension ships in `cloudcn-core`'s `theme.css`.

## React → Svelte parity

The Svelte wrapper exposes the same parts and prop names as React. Translate last, mirror exactly.
