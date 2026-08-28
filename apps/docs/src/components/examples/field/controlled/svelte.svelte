<!-- apps/docs/src/components/examples/field/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-svelte';
  let value = $state('initial');
</script>

<Field class="max-w-sm" invalid={value === ''}>
  <FieldLabel>Controlled field</FieldLabel>
  <Input bind:value />
  {#if value === ''}<FieldError>Required.</FieldError>{/if}
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = 'initial')}>Reset</button>
</Field>
