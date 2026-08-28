<!-- apps/docs/src/components/examples/select/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
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
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-xs flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <Select items={ITEMS} defaultValue={['apple']}>
        <SelectTrigger {size}>
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
    </Field>
  {/each}
</div>
