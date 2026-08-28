<!-- apps/docs/src/components/examples/select/disabled/svelte.svelte -->
<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectItemText,
  } from '@cloudvoyant/helix-svelte';

  const ITEMS = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];
</script>

<Select items={ITEMS} defaultValue={['apple']} disabled class="max-w-xs">
  <SelectTrigger>
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    {#each ITEMS as item}
      <SelectItem {item}>
        <SelectItemText>{item.label}</SelectItemText>
      </SelectItem>
    {/each}
  </SelectContent>
</Select>
