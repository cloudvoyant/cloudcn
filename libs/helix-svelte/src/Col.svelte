<!-- libs/helix-svelte/src/Col.svelte -->
<!-- Closely based on: Chakra UI Flex (direction="column"), built on @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { colBase, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(colBase, className));
</script>

<Ark as="div" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</Ark>
