<!-- apps/docs/src/components/examples/password-input/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import {
    PasswordInput,
    PasswordInputControl,
    PasswordInputInput,
  } from '@cloudvoyant/helix-svelte';
  import VisibilityToggle from './VisibilityToggle.svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Password</FieldLabel>
  <PasswordInput>
    <PasswordInputControl>
      <PasswordInputInput value="hunter2" />
      <VisibilityToggle />
    </PasswordInputControl>
  </PasswordInput>
</Field>
