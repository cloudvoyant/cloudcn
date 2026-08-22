<!-- libs/cloudcn-svelte/src/ScrollAreaRoot.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaRoot, type ScrollAreaRootProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaRootBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaRootProps = $props();

  const classes = $derived(cn(scrollAreaRootBase, className));
</script>

<ScrollAreaRoot class={classes} {...rest} />
