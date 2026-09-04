<!-- libs/vortex-svelte/src/popover/PopoverTitle.svelte -->
<!-- Closely based on: Ark UI popover (@ark-ui/svelte/popover), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { PopoverTitle, type PopoverTitleProps } from '@ark-ui/svelte/popover';
  import { popoverTitleBase, cn } from '@cloudvoyant/vortex-ui';

  type Props = PopoverTitleProps & { class?: string };

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(popoverTitleBase, className));
</script>

<PopoverTitle class={classes} {...rest}>
  {@render children?.()}
</PopoverTitle>
