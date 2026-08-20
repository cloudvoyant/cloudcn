<!-- libs/cloudcn-svelte/src/ToggleButton.svelte -->
<!-- Source: @ark-ui/svelte/toggle (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { ToggleRoot, type ToggleRootProps } from '@ark-ui/svelte/toggle';
  import { toggleButtonVariants, cn } from 'cloudcn-core';

  type Props = ToggleRootProps & {
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
    class?: string;
  };

  let { variant = 'default', size = 'default', class: className = '', ...rest }: Props = $props();

  const classes = $derived(cn(toggleButtonVariants({ variant, size }), className));
</script>

<ToggleRoot class={classes} {...rest} />
