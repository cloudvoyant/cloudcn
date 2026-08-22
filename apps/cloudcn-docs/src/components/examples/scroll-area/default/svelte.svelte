<!-- apps/cloudcn-docs/src/components/examples/scroll-area/default/svelte.svelte -->
<script lang="ts">
  import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
  } from 'cloudcn-svelte';

  const tags = Array.from({ length: 50 }, (_, i) => `v1.2.0-beta.${50 - i}`);
</script>

<ScrollAreaRoot class="h-72 w-64 rounded-md border border-border">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <div class="p-4">
        <p class="mb-4 text-sm font-medium">Tags</p>
        {#each tags as tag (tag)}
          <div class="border-t border-border py-2 text-sm text-muted-foreground">{tag}</div>
        {/each}
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollAreaRoot>
