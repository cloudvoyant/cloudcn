<!-- apps/docs/src/components/examples/password-input/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <PasswordInput>
        <PasswordInputControl>
          <PasswordInputInput {size} type="password" placeholder="••••••••" />
        </PasswordInputControl>
      </PasswordInput>
    </Field>
  {/each}
</div>
