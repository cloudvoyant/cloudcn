<!-- libs/vortex-svelte/src/SplitterResizeTriggerIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/splitter (Ark UI), Chakra UI Splitter, mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import {
    SplitterResizeTriggerIndicator,
    type SplitterResizeTriggerIndicatorProps,
  } from '@ark-ui/svelte/splitter';
  import { splitterResizeTriggerIndicatorBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', ...rest }: SplitterResizeTriggerIndicatorProps = $props();

  const classes = $derived(cn(splitterResizeTriggerIndicatorBase, className));
</script>

<SplitterResizeTriggerIndicator class={classes} {...rest} />
