<!-- apps/docs/src/components/examples/latex/block/svelte.svelte -->
<script lang="ts">
  import { LaTeX } from '@cloudvoyant/vertex-svelte';

  const latex = 'e^{i\\pi} + 1 = 0';
</script>

<LaTeX {latex} />
