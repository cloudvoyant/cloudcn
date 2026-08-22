<!-- apps/cloudcn-docs/src/components/examples/splitter/disabled/svelte.svelte -->
<script lang="ts">
  import {
    SplitterRoot,
    SplitterPanel,
    SplitterResizeTrigger,
    SplitterResizeTriggerIndicator,
  } from 'cloudcn-svelte';
</script>

<div class="h-64 w-full rounded-md border border-border">
  <SplitterRoot panels={[{ id: 'a' }, { id: 'b' }]}>
    <SplitterPanel id="a" class="flex items-center justify-center">
      <span class="text-sm font-medium">A</span>
    </SplitterPanel>
    <SplitterResizeTrigger id="a:b" disabled>
      <SplitterResizeTriggerIndicator />
    </SplitterResizeTrigger>
    <SplitterPanel id="b" class="flex items-center justify-center">
      <span class="text-sm font-medium">B</span>
    </SplitterPanel>
  </SplitterRoot>
</div>
