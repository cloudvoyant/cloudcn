<!-- apps/docs/src/components/examples/number-input/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix, FieldSuffix } from '@cloudvoyant/helix-svelte';
  import { NumberInput, NumberInputInput, NumberInputValueText } from '@cloudvoyant/helix-svelte';
  import { GripVertical } from 'lucide-svelte';
</script>

<Field class="max-w-xs">
  <FieldLabel>Quantity</FieldLabel>
  <div class="flex items-center gap-2">
    <FieldPrefix><GripVertical /></FieldPrefix>
    <NumberInput min={0} max={10} value="5" formatOptions={{ maximumFractionDigits: 0 }}>
      <NumberInputInput />
      <NumberInputValueText />
    </NumberInput>
    <FieldSuffix>units</FieldSuffix>
  </div>
</Field>
