<!-- libs/helix-svelte/src/combobox/ComboboxList.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxList, type ComboboxListProps } from '@ark-ui/svelte/combobox';
  import { multiSelectListBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxListProps = $props();

  const classes = $derived(cn(multiSelectListBase, className));
</script>

<ComboboxList class={classes} {...rest}>
  {@render children?.()}
</ComboboxList>
