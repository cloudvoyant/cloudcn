<!-- apps/docs/src/components/examples/multi-select/default/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];
</script>

<MultiSelect {items} placeholder="Search framework…" class="max-w-xs">
  {#each items as item (item.value)}
    <MultiSelectItem {item} />
  {/each}
</MultiSelect>
