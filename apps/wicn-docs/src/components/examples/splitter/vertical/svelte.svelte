<!-- apps/wicn-docs/src/components/examples/splitter/vertical/svelte.svelte -->
<script lang="ts">
  import {
    SplitterRoot,
    SplitterPanel,
    SplitterResizeTrigger,
    SplitterResizeTriggerIndicator,
  } from 'wicn-svelte';
</script>

<div class="h-64 w-full rounded-md border border-border bg-background">
  <SplitterRoot orientation="vertical" panels={[{ id: 'a' }, { id: 'b' }]}>
    <SplitterPanel id="a" class="flex items-center justify-center">
      <span class="text-sm font-medium">A</span>
    </SplitterPanel>
    <SplitterResizeTrigger id="a:b">
      <SplitterResizeTriggerIndicator />
    </SplitterResizeTrigger>
    <SplitterPanel id="b" class="flex items-center justify-center">
      <span class="text-sm font-medium">B</span>
    </SplitterPanel>
  </SplitterRoot>
</div>
