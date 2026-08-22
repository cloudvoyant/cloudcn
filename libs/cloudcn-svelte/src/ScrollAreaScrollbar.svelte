<!-- libs/cloudcn-svelte/src/ScrollAreaScrollbar.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaScrollbarBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaScrollbarProps = $props();

  const classes = $derived(cn(scrollAreaScrollbarBase, className));
</script>

<ScrollAreaScrollbar class={classes} {...rest} />
