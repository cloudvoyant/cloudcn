<!-- apps/docs/src/components/examples/latex/inline/svelte.svelte -->
<script lang="ts">
  import { toLaTeX } from '@cloudvoyant/vortex-ui';
  const html = toLaTeX('e^{i\\pi} + 1 = 0');
</script>

<p>
  The identity {@html html} rendered inline.
</p>
