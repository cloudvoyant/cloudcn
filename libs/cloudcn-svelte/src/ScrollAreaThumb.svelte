<!-- libs/cloudcn-svelte/src/ScrollAreaThumb.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaThumb, type ScrollAreaThumbProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaThumbBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaThumbProps = $props();

  const classes = $derived(cn(scrollAreaThumbBase, className));
</script>

<ScrollAreaThumb class={classes} {...rest} />
