<!-- libs/helix-svelte/src/combobox/ComboboxItemIndicator.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxItemIndicator, type ComboboxItemIndicatorProps } from '@ark-ui/svelte/combobox';
  import { comboboxItemIndicatorBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxItemIndicatorProps = $props();

  const classes = $derived(cn(comboboxItemIndicatorBase, className));
</script>

<ComboboxItemIndicator class={classes} {...rest}>
  {@render children?.()}
</ComboboxItemIndicator>
