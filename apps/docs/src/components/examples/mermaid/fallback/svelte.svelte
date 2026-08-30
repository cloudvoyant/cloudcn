<!-- apps/docs/src/components/examples/mermaid/fallback/svelte.svelte -->
<script lang="ts">
  import { Mermaid } from '@cloudvoyant/helix-svelte';

  const code = 'This is not a valid mermaid diagram.';
</script>

<Mermaid {code} />
