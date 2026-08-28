<!-- apps/docs/src/components/examples/textarea/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-svelte';
  let value = $state('initial');
</script>

<Field class="max-w-sm">
  <FieldLabel>Controlled textarea</FieldLabel>
  <Textarea bind:value />
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = 'initial')}>Reset</button>
</Field>
