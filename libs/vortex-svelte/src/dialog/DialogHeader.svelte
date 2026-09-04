<!-- libs/vortex-svelte/src/dialog/DialogHeader.svelte -->
<!-- Closely based on: @cloudvoyant/vortex-react DialogHeader -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { dialogHeaderBase, dialogHeaderStickyBase, cn } from '@cloudvoyant/vortex-ui';

  interface Props {
    class?: string;
    sticky?: boolean;
    children?: Snippet;
  }

  let { class: className = '', sticky = false, children }: Props = $props();

  const classes = $derived(cn(dialogHeaderBase, sticky && dialogHeaderStickyBase, className));
</script>

<div class={classes}>
  {@render children?.()}
</div>
