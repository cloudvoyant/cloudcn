<!-- libs/cloudcn-svelte/src/ScrollAreaCorner.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaCorner, type ScrollAreaCornerProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaCornerBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaCornerProps = $props();

  const classes = $derived(cn(scrollAreaCornerBase, className));
</script>

<ScrollAreaCorner class={classes} {...rest} />
