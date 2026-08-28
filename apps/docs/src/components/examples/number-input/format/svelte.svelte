<!-- apps/docs/src/components/examples/number-input/format/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix } from '@cloudvoyant/helix-svelte';
  import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-svelte';
  import { DollarSign } from 'lucide-svelte';
</script>

<Field class="max-w-xs">
  <FieldLabel>Price</FieldLabel>
  <div class="flex items-center gap-2">
    <FieldPrefix><DollarSign /></FieldPrefix>
    <NumberInput
      value="12.50"
      formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
    >
      <NumberInputInput />
    </NumberInput>
  </div>
</Field>
