<!-- apps/docs/src/components/examples/select/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-svelte';
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];
</script>

<Field class="max-w-xs" invalid>
  <FieldLabel>Fruit</FieldLabel>
  <Select {items} placeholder="Pick a fruit" class="w-full">
    {#each items as item (item.value)}
      <SelectItem {item} />
    {/each}
  </Select>
  <FieldError>Please pick a fruit.</FieldError>
</Field>
