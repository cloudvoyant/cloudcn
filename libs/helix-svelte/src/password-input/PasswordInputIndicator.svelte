<!-- libs/helix-svelte/src/password-input/PasswordInputIndicator.svelte -->
<script lang="ts">
  import { PasswordInputIndicator, type PasswordInputIndicatorProps } from '@ark-ui/svelte/password-input';
  import { passwordInputIndicatorBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: PasswordInputIndicatorProps = $props();
  const classes = $derived(cn(passwordInputIndicatorBase, className));
</script>

<PasswordInputIndicator class={classes} {...rest}>{@render children?.()}</PasswordInputIndicator>
