<!-- apps/docs/src/components/examples/input/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input } from '@cloudvoyant/helix-svelte';
  let value = $state('initial');
</script>

<Field class="max-w-sm">
  <FieldLabel>Controlled input</FieldLabel>
  <Input bind:value />
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = 'initial')}>Reset</button>
</Field>
