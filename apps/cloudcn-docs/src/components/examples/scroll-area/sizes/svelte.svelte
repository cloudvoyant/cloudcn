<!-- apps/cloudcn-docs/src/components/examples/scroll-area/sizes/svelte.svelte -->
<script lang="ts">
  import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
  } from 'cloudcn-svelte';

  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
</script>

<div class="flex gap-4">
  <ScrollAreaRoot class="h-40 w-48 rounded-md border border-border [--scrollbar-size:0.25rem]">
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <div class="p-4">
          {#each items as item (item)}
            <div class="py-1 text-sm">{item}</div>
          {/each}
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
  <ScrollAreaRoot class="h-40 w-48 rounded-md border border-border [--scrollbar-size:0.75rem]">
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <div class="p-4">
          {#each items as item (item)}
            <div class="py-1 text-sm">{item}</div>
          {/each}
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</div>
