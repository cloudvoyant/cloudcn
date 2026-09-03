<!-- libs/helix-svelte/src/dialog/DialogTitle.svelte -->
<!-- Closely based on: Ark UI dialog (@ark-ui/svelte/dialog), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Title as DialogTitle, type DialogTitleProps } from '@ark-ui/svelte/dialog';
  import { dialogTitleBase, cn } from '@cloudvoyant/helix';

  type Props = DialogTitleProps & { class?: string };

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(dialogTitleBase, className));
</script>

<DialogTitle class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</DialogTitle>
