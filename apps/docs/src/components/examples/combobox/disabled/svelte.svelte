<!-- apps/docs/src/components/examples/combobox/disabled/svelte.svelte -->
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
</script>

<Combobox items={ITEMS} defaultValue={['react']} disabled class="max-w-sm">
  <ComboboxControl>
    <ComboboxInput placeholder="Pick a framework…" />
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
