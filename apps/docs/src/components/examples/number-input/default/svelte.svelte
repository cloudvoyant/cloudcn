<!-- apps/docs/src/components/examples/number-input/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { NumberInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-xs">
  <FieldLabel>Quantity</FieldLabel>
  <NumberInput min={0} max={10} value="5" formatOptions={{ maximumFractionDigits: 0 }} />
</Field>
