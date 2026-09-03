<!-- libs/helix-svelte/src/CardTitle.svelte -->
<!-- Closely based on: Chakra UI Card, built on @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { cardTitleBase, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
    asChild?: Snippet<[(props?: SvelteHTMLElements['h3']) => HTMLAttributes<HTMLElement>]>;
  } & HTMLAttributes<HTMLHeadingElement>;

  let { class: className = '', children, asChild, ...rest }: Props = $props();

  const classes = $derived(cn(cardTitleBase, className));
</script>

<Ark as="h3" class={classes} {asChild} {...rest}>
  {#if children}{@render children()}{/if}
</Ark>
