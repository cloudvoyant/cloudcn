<!-- libs/helix-svelte/src/select/SelectItemGroupLabel.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { SelectItemGroupLabel, type SelectItemGroupLabelProps } from '@ark-ui/svelte/select';
  import { selectItemGroupLabelBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: SelectItemGroupLabelProps = $props();

  const classes = $derived(cn(selectItemGroupLabelBase, className));
</script>

<SelectItemGroupLabel class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</SelectItemGroupLabel>
