<!-- libs/cloudcn-svelte/src/Scroll.svelte -->
<!-- Source: @ark-ui/svelte/scroll-area (Ark UI), Chakra UI ScrollArea, mirrored from cloudcn-react -->
<script lang="ts">
  import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaCorner,
  } from '@ark-ui/svelte/scroll-area';
  import type { ScrollAreaRootProps } from '@ark-ui/svelte/scroll-area';
  import {
    scrollRootBase,
    scrollViewportBase,
    scrollContentBase,
    scrollScrollbarBase,
    scrollThumbBase,
    scrollCornerBase,
    cn,
  } from 'cloudcn-core';

  type Props = ScrollAreaRootProps & {
    orientation?: 'vertical' | 'horizontal' | 'both';
    contentClass?: string;
    thumbClass?: string;
  };

  let {
    class: className = '',
    orientation = 'vertical',
    contentClass = '',
    thumbClass = '',
    children,
    ...rest
  }: Props = $props();

  const rootClasses = $derived(cn(scrollRootBase, className));
  const contentClasses = $derived(cn(scrollContentBase, contentClass));
  const thumbClasses = $derived(cn(scrollThumbBase, thumbClass));
</script>

<ScrollAreaRoot class={rootClasses} {...rest}>
  <ScrollAreaViewport class={scrollViewportBase}>
    <ScrollAreaContent class={contentClasses}>
      {@render children?.()}
    </ScrollAreaContent>
  </ScrollAreaViewport>
  {#if orientation === 'vertical' || orientation === 'both'}
    <ScrollAreaScrollbar orientation="vertical" class={scrollScrollbarBase}>
      <ScrollAreaThumb class={thumbClasses} />
    </ScrollAreaScrollbar>
  {/if}
  {#if orientation === 'horizontal' || orientation === 'both'}
    <ScrollAreaScrollbar orientation="horizontal" class={scrollScrollbarBase}>
      <ScrollAreaThumb class={thumbClasses} />
    </ScrollAreaScrollbar>
  {/if}
  {#if orientation === 'both'}
    <ScrollAreaCorner class={scrollCornerBase} />
  {/if}
</ScrollAreaRoot>
