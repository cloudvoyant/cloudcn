<!-- apps/docs/src/components/examples/number-input/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-svelte';
  let value = $state('12.5');
</script>

<Field class="max-w-sm">
  <FieldLabel>Controlled number</FieldLabel>
  <NumberInput
    bind:value
    formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
  >
    <NumberInputInput />
  </NumberInput>
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = '12.5')}>Reset</button>
</Field>
