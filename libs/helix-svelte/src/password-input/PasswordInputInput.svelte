<!-- libs/helix-svelte/src/password-input/PasswordInputInput.svelte -->
<script lang="ts">
  import { PasswordInputInput, type PasswordInputInputProps } from '@ark-ui/svelte/password-input';
  import { passwordInputVariants, cn } from '@cloudvoyant/helix';
  type Props = Omit<PasswordInputInputProps, 'size'> & { size?: 'sm' | 'md' | 'lg'; class?: string };
  let { class: className = '', size = 'md', value = $bindable(), ...rest }: Props = $props();
  const classes = $derived(cn(passwordInputVariants({ size }), className));
</script>

<PasswordInputInput class={classes} bind:value {...rest} />
