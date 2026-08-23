# Guidelines

## Non-negotiables

- **Light and dark capable** — every component must render correctly in both themes.
- **Accessible** — accessibility comes from Ark's state machine; do not hand-roll roles, keyboard handlers, or focus management. Add `aria-label` for icon-only controls.
- **Themeable** — all styling references shadcn CSS variables; never hard-code a color.
- **Sourced, never home-made** — use Ark → Chakra → shadcn sources in that order; never hand-roll a component one of them already provides. Record the source in each file header (see `references/sourcing.md`).

## `cn` for every class merge

Use `wicn-core`'s `cn` (clsx + tailwind-merge) to combine variant classes with user `className`/`class`:

```tsx
className={cn(buttonVariants({ variant, color, size }), className)}
```

This makes conflicting utilities resolve last-wins and keeps shadcn-style overrides working.

## Tailwind + shadcn theme

- Style with Tailwind utilities that reference theme tokens (`bg-primary`, `text-muted-foreground`, `border-input`, `bg-primary/90`).
- The theme is the shadcn CSS-variable model in `wicn-core/src/theme.css`: `@theme inline` maps `--color-*` to `--background`/`--primary`/etc., with `:root` and `.dark` blocks. Do not diverge from shadcn's implementation.
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
- Never require a consumer to add CSS themselves; the extension ships in `wicn-core`'s `theme.css`.

## React → Svelte parity

The Svelte wrapper exposes the same parts and prop names as React. Translate last, mirror exactly.

## Testing

- **Test behavior and accessibility, never appearance.** Unit tests must not assert on generated cva class strings — that is appearance testing, already covered by `format:check`/lint and the e2e specs. Keep test files header-comment free.
- **Bring over tests from the source.** If the external source (Ark/Chakra/shadcn) ships tests, fixtures, or a11y checks for the component, copy them over and adapt them to these standards (see `references/sourcing.md`).
- **e2e specs are the behavior surface.** One spec per component at `apps/wicn-docs/e2e/{component}.spec.ts`, matrixed over both React and Svelte via the docs demo islands. Cover:
  - **role / aria state** — native element type (`button`/`span`), `aria-pressed` on toggles, `aria-label` on icon-only controls; non-interactive parts stay non-focusable (no `tabindex`, no button role)
  - **events** — click toggles state; keyboard `Enter`/`Space` activates
  - **inertness** — disabled controls are not activatable (`toBeDisabled`)
  - **a11y violations** — when the axe harness is available, scan for violations instead of hand-rolling role checks
  Do not assert demo-shell presence, example-card UI, or generated classes.
- **Example** — a behavior/a11y e2e test follows this pattern (the shipped `e2e/button.spec.ts`, `e2e/toggle-button.spec.ts`, and `e2e/badge.spec.ts` are the canonical full specs):
  ```ts
  const toggle = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Bold")`).first();
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await expect(async () => {
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  }).toPass();
  ```
- A theme/registry cross-check is redundant — lint/format CI (e.g. prettier on malformed CSS like an unterminated comment) already catches it; do not ship one.
