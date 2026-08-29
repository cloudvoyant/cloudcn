<!-- libs/helix-svelte/src/password-input/PasswordInput.svelte -->
<script lang="ts">
  import { PasswordInputRoot, type PasswordInputRootProps } from '@ark-ui/svelte/password-input';
  import { passwordInputRootBase, cn } from '@cloudvoyant/helix';
  import PasswordInputToggle from './PasswordInputToggle.svelte';

  type Props = Omit<PasswordInputRootProps, 'value'> & {
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    value?: string;
    class?: string;
  };

  let {
    class: className = '',
    size = 'md',
    placeholder,
    disabled,
    name,
    id,
    value = $bindable(),
    ...rest
  }: Props = $props();

  const classes = $derived(cn(passwordInputRootBase, className));
</script>

<PasswordInputRoot class={classes} {...rest}>
  <PasswordInputToggle {size} {placeholder} {disabled} {name} {id} bind:value={value} />
</PasswordInputRoot>
