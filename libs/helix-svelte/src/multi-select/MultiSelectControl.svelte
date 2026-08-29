<!-- libs/helix-svelte/src/combobox/ComboboxControl.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxControl, type ComboboxControlProps } from '@ark-ui/svelte/combobox';
  import { multiSelectControlBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxControlProps = $props();

  const classes = $derived(cn(multiSelectControlBase, className));
</script>

<ComboboxControl class={classes} {...rest}>
  {@render children?.()}
</ComboboxControl>
