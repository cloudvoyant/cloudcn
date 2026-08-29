<!-- libs/helix-svelte/src/dialog/DialogFooter.svelte -->
<!-- Closely based on: @cloudvoyant/helix-react DialogFooter -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { dialogFooterBase, dialogFooterStickyBase, cn } from '@cloudvoyant/helix';

  interface Props {
    class?: string;
    sticky?: boolean;
    children?: Snippet;
  }

  let { class: className = '', sticky = false, children }: Props = $props();

  const classes = $derived(cn(dialogFooterBase, sticky && dialogFooterStickyBase, className));
</script>

<div class={classes}>
  {@render children?.()}
</div>
