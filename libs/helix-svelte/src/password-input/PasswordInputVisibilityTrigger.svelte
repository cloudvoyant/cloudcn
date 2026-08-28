<!-- libs/helix-svelte/src/password-input/PasswordInputVisibilityTrigger.svelte -->
<script lang="ts">
  import {
    PasswordInputVisibilityTrigger,
    type PasswordInputVisibilityTriggerProps,
  } from '@ark-ui/svelte/password-input';
  import { passwordInputVisibilityTriggerBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: PasswordInputVisibilityTriggerProps = $props();
  const classes = $derived(cn(passwordInputVisibilityTriggerBase, className));
</script>

<PasswordInputVisibilityTrigger class={classes} {...rest}>{@render children?.()}</PasswordInputVisibilityTrigger>
