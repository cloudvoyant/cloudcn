<!-- apps/docs/src/components/examples/select/disabled/svelte.svelte -->
<script lang="ts">
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];
</script>

<Select {items} defaultValue={['apple']} disabled class="max-w-xs">
  {#each items as item (item.value)}
    <SelectItem {item} />
  {/each}
</Select>
