<!-- libs/helix-svelte/src/combobox/ComboboxItemGroupLabel.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxItemGroupLabel, type ComboboxItemGroupLabelProps } from '@ark-ui/svelte/combobox';
  import { multiSelectItemGroupLabelBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxItemGroupLabelProps = $props();

  const classes = $derived(cn(multiSelectItemGroupLabelBase, className));
</script>

<ComboboxItemGroupLabel class={classes} {...rest}>
  {@render children?.()}
</ComboboxItemGroupLabel>
