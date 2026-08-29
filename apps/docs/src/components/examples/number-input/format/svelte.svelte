<!-- apps/docs/src/components/examples/number-input/format/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { NumberInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-xs">
  <FieldLabel>Price</FieldLabel>
  <NumberInput
    value="12.50"
    formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
  />
</Field>
