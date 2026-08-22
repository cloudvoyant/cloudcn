<!-- apps/cloudcn-docs/src/components/examples/scroll-area/both/svelte.svelte -->
<script lang="ts">
  import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaCorner,
  } from 'cloudcn-svelte';
</script>

<ScrollAreaRoot class="h-64 w-64 rounded-md border border-border">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <div class="h-[600px] w-[400px] p-4">
        <p class="text-sm">Content that overflows both horizontally and vertically.</p>
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaScrollbar orientation="horizontal">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaCorner />
</ScrollAreaRoot>
