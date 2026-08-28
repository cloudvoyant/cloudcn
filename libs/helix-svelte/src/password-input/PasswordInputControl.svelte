<!-- libs/helix-svelte/src/password-input/PasswordInputControl.svelte -->
<script lang="ts">
  import { PasswordInputControl, type PasswordInputControlProps } from '@ark-ui/svelte/password-input';
  import { passwordInputControlBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: PasswordInputControlProps = $props();
  const classes = $derived(cn(passwordInputControlBase, className));
</script>

<PasswordInputControl class={classes} {...rest}>
  {@render children?.()}
</PasswordInputControl>
