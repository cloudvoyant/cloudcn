<!-- libs/wicn-svelte/src/SplitterResizeTriggerIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/splitter (Ark UI), Chakra UI Splitter, mirrored from wicn-react -->
<script lang="ts">
  import {
    SplitterResizeTriggerIndicator,
    type SplitterResizeTriggerIndicatorProps,
  } from '@ark-ui/svelte/splitter';
  import { splitterResizeTriggerIndicatorBase, cn } from 'wicn-core';

  let { class: className = '', ...rest }: SplitterResizeTriggerIndicatorProps = $props();

  const classes = $derived(cn(splitterResizeTriggerIndicatorBase, className));
</script>

<SplitterResizeTriggerIndicator class={classes} {...rest} />
