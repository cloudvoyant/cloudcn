<!-- libs/vertex-svelte/src/LaTeX.svelte -->
<!-- Closely based on: diffbook's KaTeX pipeline; block component, mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { latexRootBase, latexDisplayBase, latexErrorBase, toLaTeX, cn } from '@cloudvoyant/vertex-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    latex: string;
    html?: string;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let { latex, html = undefined, class: className = '', ...rest }: Props = $props();

  let markup = $derived.by(() => {
    if (html !== undefined) return html;
    try {
      return toLaTeX(latex, { displayMode: true });
    } catch {
      return latex;
    }
  });

  const classes = $derived(cn(latexRootBase, latexDisplayBase, className));
</script>

<Ark as="div" {...rest} data-latex-state="done" class={classes}>
  {#if markup === latex && html === undefined}
    <code class={latexErrorBase}>{latex}</code>
  {:else}
    <span>{@html markup}</span>
  {/if}
</Ark>
