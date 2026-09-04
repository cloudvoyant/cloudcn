<!-- libs/vertex-svelte/src/Splitter.svelte -->
<!-- Closely based on: @ark-ui/svelte/splitter (Ark UI), Chakra UI Splitter, mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { SplitterRoot, type SplitterRootProps } from '@ark-ui/svelte/splitter';
  import { splitterRootBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', ...rest }: SplitterRootProps = $props();

  const classes = $derived(cn(splitterRootBase, className));
</script>

<SplitterRoot class={classes} {...rest} />
