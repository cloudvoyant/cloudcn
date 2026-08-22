<!-- libs/cloudcn-svelte/src/ScrollAreaContent.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import { ScrollAreaContent, type ScrollAreaContentProps } from '@ark-ui/svelte/scroll-area';
  import { scrollAreaContentBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: ScrollAreaContentProps = $props();

  const classes = $derived(cn(scrollAreaContentBase, className));
</script>

<ScrollAreaContent class={classes} {...rest} />
