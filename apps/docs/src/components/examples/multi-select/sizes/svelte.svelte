<!-- apps/docs/src/components/examples/multi-select/sizes/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
  ];
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <MultiSelect {size} {items} defaultValue={['react']} placeholder="Pick a framework…">
      {#each items as item (item.value)}
        <MultiSelectItem {item} />
      {/each}
    </MultiSelect>
  {/each}
</div>
