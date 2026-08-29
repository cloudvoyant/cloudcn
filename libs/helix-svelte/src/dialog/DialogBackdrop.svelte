<!-- libs/helix-svelte/src/dialog/DialogBackdrop.svelte -->
<!-- Closely based on: Ark UI dialog (@ark-ui/svelte/dialog), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Portal } from '@ark-ui/svelte/portal';
  import { DialogBackdrop, type DialogBackdropProps } from '@ark-ui/svelte/dialog';
  import { dialogBackdropBase, cn } from '@cloudvoyant/helix';

  type Props = DialogBackdropProps & { class?: string };

  let { class: className = '', ...rest }: Props = $props();

  const classes = $derived(cn(dialogBackdropBase, className));
</script>

<Portal>
  <DialogBackdrop class={classes} {...rest} />
</Portal>
