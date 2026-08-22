<!-- libs/cloudcn-svelte/src/Row.svelte -->
<!-- Closely based on: Chakra UI Flex (direction="row"), built on @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { rowBase, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(rowBase, className));
</script>

<Ark as="div" class={classes} {...rest}>
  {@render children?.()}
</Ark>
