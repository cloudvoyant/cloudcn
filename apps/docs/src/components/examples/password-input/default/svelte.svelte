<!-- apps/docs/src/components/examples/password-input/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { PasswordInput } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Password</FieldLabel>
  <PasswordInput value="hunter2" placeholder="••••••••" />
</Field>
