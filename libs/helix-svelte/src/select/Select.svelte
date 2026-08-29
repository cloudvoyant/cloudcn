<!-- libs/helix-svelte/src/select/Select.svelte -->
<script lang="ts">
  import {
    SelectRoot,
    SelectTrigger,
    SelectValueText,
    SelectIndicator,
    SelectPositioner,
    SelectContent,
    SelectHiddenSelect,
    createListCollection,
    type SelectRootProps,
  } from '@ark-ui/svelte/select';
  import {
    inputVariants,
    selectTriggerBase,
    selectValueBase,
    selectIndicatorBase,
    selectContentBase,
    selectPositionerBase,
    cn,
  } from '@cloudvoyant/helix';
  import type { SelectItemData } from '@cloudvoyant/helix';

  type Props = Omit<SelectRootProps<SelectItemData>, 'collection'> & {
    items?: SelectItemData[];
    collection?: import('@ark-ui/svelte').ListCollection<SelectItemData>;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    search?: boolean;
    class?: string;
  };

  let {
    items,
    collection,
    size = 'md',
    placeholder,
    search = false,
    class: className = '',
    children,
    value = $bindable(),
    ...rest
  }: Props = $props();

  let query = $state('');
  const filtered = $derived(
    search && items ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())) : items,
  );
  const resolvedCollection = $derived(collection ?? createListCollection({ items: filtered ?? [] }));
  const classes = $derived(cn(inputVariants({ size }), selectTriggerBase, className));
</script>

<SelectRoot collection={resolvedCollection} bind:value {...rest}>
  <SelectTrigger class={classes}>
    <SelectValueText class={cn(selectValueBase, 'flex-1')} {placeholder} />
    <SelectIndicator class={selectIndicatorBase}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
    </SelectIndicator>
  </SelectTrigger>
  <SelectPositioner class={selectPositionerBase}>
    <SelectContent class={selectContentBase}>
      {#if search}
        <div class="sticky top-0 z-10 border-b border-input bg-popover p-1.5">
          <input
            class="w-full border-0 bg-transparent px-1 py-1 text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Search…"
            bind:value={query}
          />
        </div>
      {/if}
      {@render children?.()}
    </SelectContent>
  </SelectPositioner>
  <SelectHiddenSelect />
</SelectRoot>
