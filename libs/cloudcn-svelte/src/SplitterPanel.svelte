<!-- libs/cloudcn-svelte/src/SplitterPanel.svelte -->
<!-- Closely based on: @ark-ui/svelte/splitter (Ark UI), Chakra UI Splitter, mirrored from cloudcn-react -->
<script lang="ts">
  import { SplitterPanel, type SplitterPanelProps } from '@ark-ui/svelte/splitter';
  import { splitterPanelBase, cn } from 'cloudcn-core';

  let { class: className = '', ...rest }: SplitterPanelProps = $props();

  const classes = $derived(cn(splitterPanelBase, className));
</script>

<SplitterPanel class={classes} {...rest} />
