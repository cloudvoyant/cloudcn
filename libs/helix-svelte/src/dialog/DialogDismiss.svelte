<!-- libs/helix-svelte/src/dialog/DialogDismiss.svelte -->
<!-- Closely based on: Ark UI dialog (@ark-ui/svelte/dialog), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { DialogCloseTrigger, type DialogCloseTriggerProps } from '@ark-ui/svelte/dialog';
  import { dialogCloseTriggerBase, cn } from '@cloudvoyant/helix';

  type Props = DialogCloseTriggerProps & { class?: string };

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(dialogCloseTriggerBase, className));
</script>

<DialogCloseTrigger aria-label="Close" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</DialogCloseTrigger>
