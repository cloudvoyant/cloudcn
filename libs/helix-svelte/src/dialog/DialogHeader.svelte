<!-- libs/helix-svelte/src/dialog/DialogHeader.svelte -->
<!-- Closely based on: @cloudvoyant/helix-react DialogHeader -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { dialogHeaderBase, dialogHeaderStickyBase, cn } from '@cloudvoyant/helix';

  interface Props {
    class?: string;
    sticky?: boolean;
    children?: Snippet;
  }

  let { class: className = '', sticky = false, children }: Props = $props();

  const classes = $derived(cn(dialogHeaderBase, sticky && dialogHeaderStickyBase, className));
</script>

<div class={classes}>
  {#if children}{@render children()}{/if}
</div>
