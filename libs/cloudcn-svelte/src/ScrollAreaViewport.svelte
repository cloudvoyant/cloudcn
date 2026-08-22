<!-- libs/cloudcn-svelte/src/ScrollAreaViewport.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaViewport, type ScrollAreaViewportProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaViewportBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaViewportProps = $props();

  const classes = $derived(cn(scrollAreaViewportBase, className));
</script>

<ScrollAreaViewport class={classes} {...rest} />
