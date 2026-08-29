<!-- apps/docs/src/components/examples/number-input/disabled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { NumberInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-xs">
  <FieldLabel>Quantity</FieldLabel>
  <NumberInput value="5" disabled />
</Field>
