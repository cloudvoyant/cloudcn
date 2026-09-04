<!-- apps/docs/src/components/examples/latex/prerendered/svelte.svelte -->
<script lang="ts">
  import { LaTeX } from '@cloudvoyant/vertex-svelte';
  import { toLaTeX } from '@cloudvoyant/vertex-ui';

  const latex = '\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}';
  const html = toLaTeX(latex, { displayMode: true });
</script>

<LaTeX {latex} {html} />
