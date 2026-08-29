<!-- apps/docs/src/components/examples/multi-select/multiple/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];
</script>

<MultiSelect multiple {items} defaultValue={['react', 'svelte']} placeholder="Select frameworks…" class="max-w-xs">
  {#each items as item (item.value)}
    <MultiSelectItem {item} />
  {/each}
</MultiSelect>
