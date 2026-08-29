<!-- libs/helix-svelte/src/select/SelectItem.svelte -->
<script lang="ts">
  import { SelectItem, SelectItemText, SelectItemIndicator, type SelectItemProps } from '@ark-ui/svelte/select';
  import { selectItemBase, selectItemTextBase, selectItemIndicatorBase, cn } from '@cloudvoyant/helix';
  import type { SelectItemData } from '@cloudvoyant/helix';

  type Props = Omit<SelectItemProps, 'item'> & {
    item: SelectItemData;
    class?: string;
  };

  let { item, class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(selectItemBase, className));
</script>

<SelectItem {item} class={classes} {...rest}>
  <SelectItemText class={selectItemTextBase}>
    {#if children}{@render children()}{:else}{item.label}{/if}
  </SelectItemText>
  <SelectItemIndicator class={selectItemIndicatorBase}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
  </SelectItemIndicator>
</SelectItem>
