<!-- libs/helix-svelte/src/field/FieldControl.svelte -->
<script lang="ts">
  import { fieldControlBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: { class?: string; children: import('svelte').Snippet } = $props();

  const classes = $derived(cn(fieldControlBase, className));
</script>

<div class={classes} {...rest}>{@render children?.()}</div>
