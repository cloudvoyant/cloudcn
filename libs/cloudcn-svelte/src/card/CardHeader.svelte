<!-- libs/cloudcn-svelte/src/CardHeader.svelte -->
<!-- Source: Chakra UI Card, built on @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { cardHeaderBase, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(cardHeaderBase, className));
</script>

<Ark as="div" class={classes} {...rest}>
  {@render children?.()}
</Ark>
