<!-- libs/vortex-svelte/src/combobox/ComboboxList.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { ComboboxList, type ComboboxListProps } from '@ark-ui/svelte/combobox';
  import { comboboxListBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: ComboboxListProps = $props();

  const classes = $derived(cn(comboboxListBase, className));
</script>

<ComboboxList class={classes} {...rest}>
  {@render children?.()}
</ComboboxList>
