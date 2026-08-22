<!-- libs/cloudcn-svelte/src/CardDescription.svelte -->
<!-- Source: Chakra UI Card, built on @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { cardDescriptionBase, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLParagraphElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(cardDescriptionBase, className));
</script>

<Ark as="p" class={classes} {...rest}>
  {@render children?.()}
</Ark>
