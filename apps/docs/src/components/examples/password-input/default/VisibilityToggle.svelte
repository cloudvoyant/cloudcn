<!-- apps/docs/src/components/examples/password-input/default/VisibilityToggle.svelte -->
<script lang="ts">
  import { PasswordInputVisibilityTrigger, usePasswordInput } from '@cloudvoyant/helix-svelte';
  import { Eye, EyeOff } from 'lucide-svelte';
  const api = usePasswordInput();
</script>

<PasswordInputVisibilityTrigger aria-label={api()?.visible ? 'Hide password' : 'Show password'}>
  {#if api()?.visible}<EyeOff />{:else}<Eye />{/if}
</PasswordInputVisibilityTrigger>
