<!-- apps/docs/src/components/examples/multi-select/disabled/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
  ];
</script>

<MultiSelect multiple {items} defaultValue={['react']} disabled class="max-w-sm">
  {#each items as item (item.value)}
    <MultiSelectItem {item} />
  {/each}
</MultiSelect>
