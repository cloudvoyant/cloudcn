<!-- apps/docs/src/components/examples/select/controlled/svelte.svelte -->
<script lang="ts">
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];
  let value = $state(['banana']);
</script>

<div class="flex max-w-xs flex-col gap-2">
  <Select {items} bind:value class="w-full">
    {#each items as item (item.value)}
      <SelectItem {item} />
    {/each}
  </Select>
  <output data-testid="value">{value[0]}</output>
  <button type="button" data-testid="reset" onclick={() => (value = ['banana'])}>Reset</button>
</div>
