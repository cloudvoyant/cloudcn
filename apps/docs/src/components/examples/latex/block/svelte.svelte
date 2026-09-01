<!-- apps/docs/src/components/examples/latex/block/svelte.svelte -->
<script lang="ts">
  import { LaTeX } from '@cloudvoyant/helix-svelte';

  const latex = 'e^{i\\pi} + 1 = 0';
</script>

<LaTeX {latex} />
