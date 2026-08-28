<!-- apps/docs/src/components/examples/select/controlled/svelte.svelte -->
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
    { value: 'cherry', label: 'Cherry' },
  ];
  let value = $state(['banana']);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <Select items={ITEMS} bind:value>
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
  <output data-testid="value">{value[0]}</output>
  <button type="button" data-testid="reset" onclick={() => (value = ['banana'])}>Reset</button>
</div>
