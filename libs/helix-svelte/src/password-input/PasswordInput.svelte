<!-- libs/helix-svelte/src/password-input/PasswordInput.svelte -->
<script lang="ts">
  import { PasswordInputRoot, type PasswordInputRootProps } from '@ark-ui/svelte/password-input';
  import { passwordInputRootBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: PasswordInputRootProps = $props();
  const classes = $derived(cn(passwordInputRootBase, className));
</script>

<PasswordInputRoot class={classes} {...rest}>
  {@render children?.()}
</PasswordInputRoot>
