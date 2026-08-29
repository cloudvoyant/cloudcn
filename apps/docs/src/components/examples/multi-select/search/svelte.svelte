<!-- apps/docs/src/components/examples/multi-select/search/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const all = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'Solid' },
    { value: 'angular', label: 'Angular' },
    { value: 'ember', label: 'Ember' },
    { value: 'alpine', label: 'Alpine' },
    { value: 'lit', label: 'Lit' },
    { value: 'preact', label: 'Preact' },
    { value: 'qwik', label: 'Qwik' },
  ];
</script>

<MultiSelect multiple items={all} defaultValue={['react', 'svelte']} placeholder="Search frameworks…" class="max-w-sm">
  {#each all as item (item.value)}
    <MultiSelectItem {item} />
  {/each}
</MultiSelect>
