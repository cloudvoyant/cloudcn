# Sourcing — Ark UI → Chakra UI → shadcn

Every new component starts from an existing, accessibility-complete source. The order matters: we wrap Ark UI directly when possible, fall back to Chakra UI (built on Ark), and only then to shadcn (which needs Ark swaps). The Svelte translation always happens last.

## Step 1 — Ark UI (preferred)

Ark UI is the library cloudcn wraps directly. Check it first.

- Query the Ark UI MCP server: `@ark-ui/mcp`
  - Setup reference: <https://ark-ui.com/docs/ai/mcp-server>
- If the component exists in Ark, wrap its parts directly per `package-layout.md`.
- `--ark` forces this path.

## Step 2 — Chakra UI (built on Ark)

If Ark has no matching primitive, check Chakra UI — it is built on Ark, so a Chakra snippet is a close, accessible starting point.

- Query the Chakra MCP server: <https://chakra-ui.com/docs/get-started/ai/mcp-server>
- Pull a snippet with `@chakra-ui/cli`'s snippet command (`npx @chakra-ui/cli snippet add <name>`).
- Adapt the snippet to cloudcn standards — `cn`, Tailwind, our theme — without sacrificing its accessibility.
- `--chakra` forces this path.

## Step 3 — shadcn (last resort)

If neither has it, use shadcn as a design/starting point.

- Install the shadcn skill: `npx skills add shadcn/ui`
  - Reference: <https://ui.shadcn.com/docs/skills>
- Swap its base (base-ui / radix / native) parts for the equivalent Ark UI components.
- `--shadcn` forces this path.

## Always — Svelte last

Whatever the React result is, translate it to Svelte only after the React component is finalized. Do not build both frameworks in parallel — the Svelte wrapper mirrors the React one's parts and variants.

## Record the source in file headers

Every component file records its origin in a header comment, so reviewers can verify the sourcing chain:

```tsx
// cloudcn-react/src/tooltip.tsx
// Source: @ark-ui/react/tooltip (Ark UI)
```

```svelte
<!-- cloudcn-svelte/src/TooltipContent.svelte -->
<!-- Source: @ark-ui/svelte/tooltip (Ark UI), mirrored from cloudcn-react -->
```

Name the actual source (`@ark-ui/react/tooltip`, `@chakra-ui/...`, or `shadcn/ui <component>`). This makes it obvious when a component was home-made instead of sourced — which `review` flags.
