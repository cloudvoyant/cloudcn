<!-- apps/docs/src/components/examples/combobox/sizes/svelte.svelte -->
<script lang="ts">
  import {
    Combobox,
    ComboboxControl,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxItemText,
  } from '@cloudvoyant/helix-svelte';

  const ITEMS = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
  ];
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Combobox items={ITEMS} defaultValue={['react']}>
      <ComboboxControl>
        <ComboboxInput {size} placeholder="Pick a framework…" />
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList>
          {#each ITEMS as item}
            <ComboboxItem {item}>
              <ComboboxItemText>{item.label}</ComboboxItemText>
            </ComboboxItem>
          {/each}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  {/each}
</div>
