<!-- apps/cloudcn-docs/src/components/examples/scroll-area/thumb-styling/svelte.svelte -->
<script lang="ts">
  import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
  } from 'cloudcn-svelte';

  const items = Array.from({ length: 20 }, (_, i) => i + 1);
</script>

<ScrollAreaRoot class="h-64 w-64 rounded-md border border-border">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <div class="p-4">
        {#each items as i (i)}
          <div class="py-1 text-sm">Item {i}</div>
        {/each}
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">
    <ScrollAreaThumb class="bg-primary" />
  </ScrollAreaScrollbar>
</ScrollAreaRoot>
