<!-- apps/docs/src/components/examples/password-input/disabled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Password</FieldLabel>
  <PasswordInput>
    <PasswordInputControl>
      <PasswordInputInput type="password" placeholder="••••••••" disabled />
    </PasswordInputControl>
  </PasswordInput>
</Field>
