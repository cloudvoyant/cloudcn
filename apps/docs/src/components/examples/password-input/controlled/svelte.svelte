<!-- apps/docs/src/components/examples/password-input/controlled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import {
    PasswordInput,
    PasswordInputControl,
    PasswordInputInput,
  } from '@cloudvoyant/helix-svelte';
  import VisibilityToggle from './VisibilityToggle.svelte';
  let value = $state('initial');
</script>

<Field class="max-w-sm">
  <FieldLabel>Controlled password</FieldLabel>
  <PasswordInput>
    <PasswordInputControl>
      <PasswordInputInput bind:value />
      <VisibilityToggle />
    </PasswordInputControl>
  </PasswordInput>
  <output data-testid="value">{value}</output>
  <button type="button" data-testid="reset" onclick={() => (value = 'initial')}>Reset</button>
</Field>
