<!-- libs/cloudcn-svelte/src/Button.svelte -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { buttonVariants, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    variant?:
      | 'primary'
      | 'secondary'
      | 'outline'
      | 'rounded'
      | 'success'
      | 'danger'
      | 'warn'
      | 'info'
      | 'outline-primary'
      | 'outline-secondary'
      | 'outline-success'
      | 'outline-danger'
      | 'outline-warn'
      | 'outline-info';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children?: Snippet;
  } & HTMLButtonAttributes;

  let { variant = 'primary', size = 'md', class: className = '', type = 'button', disabled = false, children, ...rest }: Props = $props();

  const classes = $derived(cn(buttonVariants({ variant, size }), className));
</script>

<Ark as="button" class={classes} {type} {disabled} {...rest}>
  {@render children?.()}
</Ark>
