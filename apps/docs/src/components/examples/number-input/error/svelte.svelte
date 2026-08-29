<!-- apps/docs/src/components/examples/number-input/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-svelte';
  import { NumberInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-xs" invalid>
  <FieldLabel>Quantity</FieldLabel>
  <NumberInput value="0" min={1} max={10} />
  <FieldError>Invalid number.</FieldError>
</Field>
