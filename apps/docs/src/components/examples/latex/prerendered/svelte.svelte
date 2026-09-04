<!-- apps/docs/src/components/examples/latex/prerendered/svelte.svelte -->
<script lang="ts">
  import { LaTeX } from '@cloudvoyant/vortex-svelte';
  import { toLaTeX } from '@cloudvoyant/vortex-ui';

  const latex = '\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}';
  const html = toLaTeX(latex, { displayMode: true });
</script>

<LaTeX {latex} {html} />
