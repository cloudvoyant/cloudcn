<!-- libs/cloudcn-svelte/src/SplitterResizeTrigger.svelte -->
<!-- Source: @ark-ui/svelte/splitter (Ark UI), Chakra UI Splitter, mirrored from cloudcn-react -->
<script lang="ts">
  import { SplitterResizeTrigger, type SplitterResizeTriggerProps } from '@ark-ui/svelte/splitter';
  import { splitterResizeTriggerBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: SplitterResizeTriggerProps = $props();

  const classes = $derived(cn(splitterResizeTriggerBase, className));
</script>

<SplitterResizeTrigger class={classes} {...rest} />
