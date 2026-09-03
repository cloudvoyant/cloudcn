<!-- libs/helix-svelte/src/combobox/Combobox.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<!-- Note: adapted to Ark UI v5 collection-based API (ComboboxRoot `collection` + ComboboxItem `item`). -->
<script lang="ts">
  import {
    ComboboxRoot,
    createListCollection,
    type ComboboxRootProps,
    type ListCollection,
  } from '@ark-ui/svelte/combobox';
  import type { SelectItemData } from '@cloudvoyant/helix';

  type Props = Omit<ComboboxRootProps<SelectItemData>, 'collection'> & {
    items?: SelectItemData[];
    collection?: ListCollection<SelectItemData>;
  };

  let { items, collection, openOnClick = true, lazyMount = true, unmountOnExit = true, children, ...rest }: Props = $props();

  const resolvedCollection = $derived(collection ?? createListCollection({ items: items ?? [] }));
</script>

<ComboboxRoot collection={resolvedCollection} {openOnClick} {lazyMount} {unmountOnExit} {...rest}>
  {#if children}{@render children()}{/if}
</ComboboxRoot>
