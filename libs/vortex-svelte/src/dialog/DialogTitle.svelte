<!-- libs/vortex-svelte/src/dialog/DialogTitle.svelte -->
<!-- Closely based on: Ark UI dialog (@ark-ui/svelte/dialog), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { Title as DialogTitle, type DialogTitleProps } from '@ark-ui/svelte/dialog';
  import { dialogTitleBase, cn } from '@cloudvoyant/vortex-ui';

  type Props = DialogTitleProps & { class?: string };

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(dialogTitleBase, className));
</script>

<DialogTitle class={classes} {...rest}>
  {@render children?.()}
</DialogTitle>
