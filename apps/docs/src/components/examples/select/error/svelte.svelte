<!-- apps/docs/src/components/examples/select/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-svelte';
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

<Field class="max-w-xs" invalid>
  <FieldLabel>Fruit</FieldLabel>
  <Select items={ITEMS} defaultValue={[]}>
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
  <FieldError>Please pick a fruit.</FieldError>
</Field>
