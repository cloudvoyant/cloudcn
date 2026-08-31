<!-- apps/docs/src/components/examples/mermaid/colors/svelte.svelte -->
<script lang="ts">
  import { Mermaid } from '@cloudvoyant/helix-svelte';

  const code = `flowchart LR
  classDef success fill:#d1fae5,stroke:#065f46,stroke-width:2px
  classDef warn fill:#fef3c7,stroke:#92400e,stroke-width:2px
  classDef info fill:#dbeafe,stroke:#1e40af,stroke-width:2px
  A[Start] --> B[Process]
  B --> C[Done]
  B --> D[Retry]
  C:::success
  D:::warn
  A:::info
  style E fill:#f3e8ff,stroke:#6b21a8,stroke-width:2px
  E[Note]`;
</script>

<Mermaid {code} />
