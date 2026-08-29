<!-- libs/helix-svelte/src/multi-select/MultiSelectItem.svelte -->
<script lang="ts">
  import { ComboboxItem, ComboboxItemText, ComboboxItemIndicator, type ComboboxItemProps } from '@ark-ui/svelte/combobox';
  import { multiSelectItemVariants, multiSelectItemIndicatorBase, cn } from '@cloudvoyant/helix';
  import type { SelectItemData } from '@cloudvoyant/helix';

  type Props = Omit<ComboboxItemProps, 'item'> & {
    item: SelectItemData;
    class?: string;
  };

  let { item, class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(multiSelectItemVariants({ showIndicator: true }), className));
</script>

<ComboboxItem {item} persistFocus class={classes} {...rest}>
  <ComboboxItemText class="flex w-full flex-1 items-center gap-2">
    {#if children}{@render children()}{:else}{item.label}{/if}
  </ComboboxItemText>
  <ComboboxItemIndicator class={multiSelectItemIndicatorBase}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
  </ComboboxItemIndicator>
</ComboboxItem>
