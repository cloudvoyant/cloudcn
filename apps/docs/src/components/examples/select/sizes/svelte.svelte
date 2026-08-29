<!-- apps/docs/src/components/examples/select/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <Select {items} {size} defaultValue={['apple']}>
        {#each items as item (item.value)}
          <SelectItem {item} />
        {/each}
      </Select>
    </Field>
  {/each}
</div>
