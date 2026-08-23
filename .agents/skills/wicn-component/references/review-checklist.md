# Review Checklist

Audit checklist for the `review` verb. Each item maps to a severity; report every failing item with `file:line` and a concrete fix. Review does not write files.

## Sourcing

- [ ] Component is sourced from Ark UI directly, or from Chakra/shadcn where Ark had no primitive — traceable in code and docs.
- [ ] No home-made implementation: the component uses Ark → Chakra → shadcn sources, never a hand-rolled reimplementation when one of those exists.
- [ ] No hand-rolled behavior that Ark's state machine already provides.
- [ ] Source origin is listed in each file header (see `references/sourcing.md` — the header comment names Ark/Chakra/shadcn source, e.g. "based on @ark-ui/react/tooltip").

## Package placement

- [ ] Shared types, cva variants, `cn`, and theme tokens are in `wicn-core`, not a framework package.
- [ ] React wrapper is a thin Ark factory wrapper — only `cn(variants(...))` + prop pass-through, zero logic.
- [ ] Svelte wrapper mirrors React parts/variants, Svelte 5 runes, one `.svelte` per part.
- [ ] Demo examples, MDX page, and E2E spec live under `apps/wicn-docs`.

## Quality gates

- [ ] Light and dark: component renders correctly in both themes (no hard-coded colors).
- [ ] Accessible: no hand-rolled roles/keyboard/focus; `aria-label` on icon-only controls.
- [ ] Themeable: all styling references shadcn CSS variables; theme extensions documented in the MDX page.
- [ ] `cn` used for every class merge; variant/color/size are orthogonal cva axes (not compound variants).

## Docs conformance

- [ ] MDX page follows the anatomy in `references/component-docs-template.md` (Intro → Examples → Guides optional → API Reference mandatory → Accessibility optional).
- [ ] API Reference groups props by part, each under `#### Props`; no code snippets in the API section.
- [ ] Passthrough APIs link the relevant upstream component (Ark/Chakra) so readers can find the full prop reference.
- [ ] Examples are colocated (`react.tsx`/`svelte.svelte` are the `?raw` snippets) and hard-coded (no loops).
- [ ] Theme extensions, if any, are explicitly called out.

## Validation

- [ ] `mise run build` passes.
- [ ] `mise run test` passes.
- [ ] `mise run lint` passes.
- [ ] `mise run format:check` passes.
- [ ] `mise run e2e` passes.

## E2E coverage

Each component ships an E2E spec (`apps/wicn-docs/e2e/{component}.spec.ts`). Check it:

- [ ] Spec exists and is matrixed across both frameworks (`react` and `svelte`).
- [ ] Spec exercises the component's behavior and accessibility via the demo islands: correct roles/aria attributes (`button`/`span`, `aria-pressed`, `aria-label` on icon-only controls), dispatched events (click toggles state; keyboard `Enter`/`Space` activates), and inertness (disabled controls are not activatable).
- [ ] Spec avoids demo-shell/app presence assertions (no shared-class checks, no example-card UI, no generated-class assertions).
- [ ] Spec runs green via `mise run e2e`.
