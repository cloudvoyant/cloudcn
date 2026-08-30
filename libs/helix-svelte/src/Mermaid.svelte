<!-- libs/helix-svelte/src/Mermaid.svelte -->
<!-- Closely based on: diffbook Mermaid (packages/diffbook-ui/src/components/Mermaid.tsx placeholder +
     apps/book/src/components/article-body.tsx client renderer), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { mermaidRootBase, mermaidSourceBase, mermaidSvgBase, renderMermaidSource, cn } from '@cloudvoyant/helix';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    /** Mermaid diagram source. */
    code: string;
    /** Extra classes for the root container. */
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let { code, class: className = '', ...rest }: Props = $props();

  let svg = $state<string | null>(null);

  $effect(() => {
    let cancelled = false;
    svg = null;
    renderMermaidSource(code)
      .then((rendered) => {
        if (!cancelled) svg = rendered;
      })
      .catch(() => {
        /* invalid diagram or failed mermaid load — leave the source visible */
      });
    return () => {
      cancelled = true;
    };
  });

  const classes = $derived(cn(mermaidRootBase, className));
</script>

<Ark
  as="div"
  {...rest}
  data-mermaid-code={JSON.stringify(code)}
  data-mermaid-src={svg !== null ? code : undefined}
  class={classes}
>
  {#if svg !== null}
    <div class={mermaidSvgBase}>{@html svg}</div>
  {:else}
    <pre class={mermaidSourceBase}>{code}</pre>
  {/if}
</Ark>
