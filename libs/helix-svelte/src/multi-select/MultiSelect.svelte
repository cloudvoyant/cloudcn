<!-- libs/helix-svelte/src/multi-select/MultiSelect.svelte -->
<script lang="ts">
  import {
    ComboboxRoot,
    ComboboxControl,
    ComboboxInput,
    ComboboxPositioner,
    ComboboxContent,
    ComboboxList,
    createListCollection,
    type ComboboxRootProps,
  } from '@ark-ui/svelte/combobox';
  import {
    multiSelectControlBase,
    multiSelectInputBase,
    multiSelectInputVariants,
    multiSelectContentBase,
    multiSelectPositionerBase,
    multiSelectListBase,
    cn,
  } from '@cloudvoyant/helix';
  import type { SelectItemData } from '@cloudvoyant/helix';
  import MultiSelectChips from './MultiSelectChips.svelte';

  type Props = Omit<ComboboxRootProps<SelectItemData>, 'collection'> & {
    items?: SelectItemData[];
    collection?: import('@ark-ui/svelte').ListCollection<SelectItemData>;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    class?: string;
  };

  let {
    items,
    collection,
    size = 'md',
    placeholder,
    openOnClick = true,
    lazyMount = true,
    unmountOnExit = true,
    class: className = '',
    children,
    value = $bindable(),
    ...rest
  }: Props = $props();

  const resolvedCollection = $derived(collection ?? createListCollection({ items: items ?? [] }));
  const classes = $derived(cn(multiSelectControlBase, className));
  const inputClass = $derived(cn(multiSelectInputBase, multiSelectInputVariants({ size })));
</script>

<ComboboxRoot
  collection={resolvedCollection}
  {openOnClick}
  {lazyMount}
  {unmountOnExit}
  bind:value
  {...rest}
>
  <ComboboxControl class={classes}>
    <MultiSelectChips {items} />
    <ComboboxInput class={inputClass} {placeholder} />
    <span class="shrink-0 text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
    </span>
  </ComboboxControl>
  <ComboboxPositioner class={multiSelectPositionerBase}>
    <ComboboxContent class={multiSelectContentBase}>
      <ComboboxList class={multiSelectListBase}>
        {@render children?.()}
      </ComboboxList>
    </ComboboxContent>
  </ComboboxPositioner>
</ComboboxRoot>
