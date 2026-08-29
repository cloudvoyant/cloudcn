<!-- apps/docs/src/components/examples/select/default/svelte.svelte -->
<script lang="ts">
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];
</script>

<Select {items} defaultValue={['apple']} placeholder="Pick a fruit" class="max-w-xs">
  {#each items as item (item.value)}
    <SelectItem {item} />
  {/each}
</Select>
