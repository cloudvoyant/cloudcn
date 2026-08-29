<!-- libs/helix-svelte/src/password-input/PasswordInputToggle.svelte (internal) -->
<script lang="ts">
  import {
    PasswordInputControl,
    PasswordInputInput,
    PasswordInputVisibilityTrigger,
    usePasswordInputContext,
  } from '@ark-ui/svelte/password-input';
  import { passwordInputControlBase, passwordInputVariants, passwordInputVisibilityTriggerBase, cn } from '@cloudvoyant/helix';

  let {
    size = 'md',
    placeholder,
    disabled,
    name,
    id,
    value = $bindable(),
  }: {
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    value?: string;
  } = $props();

  const api = usePasswordInputContext();
  const visible = $derived(api().visible);
  const inputClass = $derived(cn(passwordInputVariants({ size })));
</script>

<PasswordInputControl class={passwordInputControlBase}>
  <PasswordInputInput class={inputClass} {placeholder} {disabled} {name} {id} bind:value={value} />
  <PasswordInputVisibilityTrigger
    aria-label={visible ? 'Hide password' : 'Show password'}
    class={passwordInputVisibilityTriggerBase}
  >
    {#if visible}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 8 10 8a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
    {/if}
  </PasswordInputVisibilityTrigger>
</PasswordInputControl>
