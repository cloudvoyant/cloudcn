<!-- libs/helix-svelte/src/select/SelectItemText.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { SelectItemText, type SelectItemTextProps } from '@ark-ui/svelte/select';
  import { selectItemTextBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: SelectItemTextProps = $props();

  const classes = $derived(cn(selectItemTextBase, className));
</script>

<SelectItemText class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</SelectItemText>
