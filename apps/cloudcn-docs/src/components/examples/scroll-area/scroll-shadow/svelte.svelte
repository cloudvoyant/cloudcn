<!-- apps/cloudcn-docs/src/components/examples/scroll-area/scroll-shadow/svelte.svelte -->
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
    <ScrollAreaContent
      class="data-[overflow-y]:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <div class="p-4">
        {#each items as i (i)}
          <p class="border-t border-border py-2 text-sm text-muted-foreground">Item {i}</p>
        {/each}
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollAreaRoot>
