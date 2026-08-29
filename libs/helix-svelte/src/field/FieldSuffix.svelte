<!-- libs/helix-svelte/src/field/FieldSuffix.svelte -->
<script lang="ts">
  import { fieldSuffixBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: { class?: string; children: import('svelte').Snippet } = $props();
  const classes = $derived(cn(fieldSuffixBase, className));
</script>

<span class={classes} {...rest}>{@render children?.()}</span>
