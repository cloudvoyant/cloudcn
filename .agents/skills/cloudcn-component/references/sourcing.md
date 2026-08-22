# Sourcing — Ark UI → Chakra UI → shadcn

Every new component starts from an existing, accessibility-complete source. The order matters: we wrap Ark UI directly when possible, fall back to Chakra UI (built on Ark), and only then to shadcn (which needs Ark swaps). The Svelte translation always happens last.

**The first pass is a working copy, never written from scratch** — pull a real, working implementation from Ark/Chakra (MCP snippet) or shadcn, then adapt it to cloudcn standards.

## MCP servers

Before sourcing, confirm the Ark and Chakra UI MCP servers are set up. If one is unavailable, use its docs (links in `references/reference-index.md`) and surface the setup instructions in your report — the MCP server is the primary retrieval path.

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

## Always — Svelte last, tests copied

Build and verify the React component first; only after it is finalized, translate it to Svelte. Never build both frameworks in parallel — the Svelte wrapper mirrors the React one's parts and variants.

If the external source (Ark/Chakra/shadcn) ships tests for the component, copy them over and adapt them to this skill's testing standards (see `references/guidelines.md` → Testing): behavior and accessibility across both frameworks, never appearance/class-string assertions.

## Record the source in file headers

Every component file records its origin in a header comment, so reviewers can verify the sourcing chain. Since cloudcn adapts components heavily to its own `cn`/Tailwind/theme conventions, phrase it as **closely based on** rather than a verbatim source:

```tsx
// cloudcn-react/src/tooltip.tsx
// Closely based on: @ark-ui/react/tooltip (Ark UI)
```

```svelte
<!-- cloudcn-svelte/src/TooltipContent.svelte -->
<!-- Closely based on: @ark-ui/svelte/tooltip (Ark UI), mirrored from cloudcn-react -->
```

Name the actual origin (`@ark-ui/react/tooltip`, `@chakra-ui/...`, or `shadcn/ui <component>`). This makes it obvious when a component was home-made instead of adapted — which `review` flags.
