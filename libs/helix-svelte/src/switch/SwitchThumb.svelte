<!-- libs/helix-svelte/src/switch/SwitchThumb.svelte -->
<!-- Closely based on: Shark UI switch (@ark-ui/svelte/switch), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { SwitchThumb, type SwitchThumbProps } from '@ark-ui/svelte/switch';
  import { switchThumbBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', ...rest }: SwitchThumbProps = $props();

  const classes = $derived(cn(switchThumbBase, className));
</script>

<SwitchThumb class={classes} {...rest} />
