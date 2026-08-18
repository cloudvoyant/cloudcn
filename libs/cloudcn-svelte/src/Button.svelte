<!-- libs/cloudcn-svelte/src/Button.svelte -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { buttonVariants, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';

  type Props = {
    variant?: 'primary' | 'secondary' | 'outline' | 'rounded' | 'success' | 'danger' | 'warn' | 'info';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children?: Snippet;
  };

  let { variant = 'primary', size = 'md', class: className = '', type = 'button', disabled = false, children }: Props = $props();

  const classes = $derived(cn(buttonVariants({ variant, size }), className));
</script>

<Ark as="button" class={classes} {type} {disabled}>
  {@render children?.()}
</Ark>
