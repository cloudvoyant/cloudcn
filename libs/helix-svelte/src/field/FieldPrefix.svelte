<!-- libs/helix-svelte/src/field/FieldPrefix.svelte -->
<script lang="ts">
  import { fieldPrefixBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: { class?: string; children: import('svelte').Snippet } = $props();
  const classes = $derived(cn(fieldPrefixBase, className));
</script>

<span class={classes} {...rest}>{@render children?.()}</span>
