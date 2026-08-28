<!-- apps/docs/src/components/examples/password-input/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-svelte';
  import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm" invalid>
  <FieldLabel>Password</FieldLabel>
  <PasswordInput>
    <PasswordInputControl>
      <PasswordInputInput type="password" value="short" />
    </PasswordInputControl>
  </PasswordInput>
  <FieldError>Must be at least 8 characters.</FieldError>
</Field>
