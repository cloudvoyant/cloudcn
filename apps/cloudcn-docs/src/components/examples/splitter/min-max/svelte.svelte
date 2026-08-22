<!-- apps/cloudcn-docs/src/components/examples/splitter/min-max/svelte.svelte -->
<script lang="ts">
  import {
    SplitterRoot,
    SplitterPanel,
    SplitterResizeTrigger,
    SplitterResizeTriggerIndicator,
  } from 'cloudcn-svelte';
</script>

<div class="h-64 w-full rounded-md border border-border">
  <SplitterRoot
    defaultSize={[30, 70]}
    panels={[
      { id: 'a', minSize: 20, maxSize: 60 },
      { id: 'b', minSize: 40 },
    ]}
  >
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
