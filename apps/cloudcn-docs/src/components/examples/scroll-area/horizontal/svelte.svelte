<!-- apps/cloudcn-docs/src/components/examples/scroll-area/horizontal/svelte.svelte -->
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

<ScrollAreaRoot class="h-24 w-full rounded-md border border-border">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <div class="flex gap-2 p-4">
        {#each items as i (i)}
          <div class="shrink-0 rounded-md bg-muted px-3 py-1 text-sm">Item {i}</div>
        {/each}
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="horizontal">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollAreaRoot>
