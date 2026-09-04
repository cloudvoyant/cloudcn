<!-- libs/vertex-svelte/src/combobox/ComboboxItemGroupLabel.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { ComboboxItemGroupLabel, type ComboboxItemGroupLabelProps } from '@ark-ui/svelte/combobox';
  import { comboboxItemGroupLabelBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: ComboboxItemGroupLabelProps = $props();

  const classes = $derived(cn(comboboxItemGroupLabelBase, className));
</script>

<ComboboxItemGroupLabel class={classes} {...rest}>
  {@render children?.()}
</ComboboxItemGroupLabel>
