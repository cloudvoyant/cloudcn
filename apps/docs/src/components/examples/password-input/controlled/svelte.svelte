<!-- apps/docs/src/components/examples/password-input/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { PasswordInput } from '@cloudvoyant/helix-svelte';
  let value = $state('initial');
</script>

<Field class="max-w-sm">
  <FieldLabel>Password</FieldLabel>
  <PasswordInput bind:value={value} placeholder="••••••••" />
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = 'initial')}>Reset</button>
</Field>
