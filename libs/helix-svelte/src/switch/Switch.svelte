<!-- libs/helix-svelte/src/switch/Switch.svelte -->
<!-- Closely based on: Shark UI switch (@ark-ui/svelte/switch), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { setContext } from 'svelte';
  import { SwitchRoot, SwitchControl, SwitchThumb, SwitchHiddenInput, type SwitchRootProps } from '@ark-ui/svelte/switch';
  import { switchVariants, switchControlBase, switchThumbBase, cn } from '@cloudvoyant/helix';

  type Props = SwitchRootProps & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', children, checked = $bindable(), ...rest }: Props = $props();

  setContext<'sm' | 'md' | 'lg'>('switch-size', size);

  const classes = $derived(cn('flex items-center gap-2', className));
  const controlClass = $derived(cn(switchVariants({ size }), switchControlBase));
</script>

<SwitchRoot class={classes} bind:checked {...rest}>
  <SwitchControl class={controlClass}>
    <SwitchThumb class={switchThumbBase} />
  </SwitchControl>
  {@render children?.()}
  <SwitchHiddenInput />
</SwitchRoot>
