<!-- libs/helix-svelte/src/dialog/Dialog.svelte -->
<!-- Closely based on: Ark UI dialog (@ark-ui/svelte/dialog), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Root as DialogRoot, type DialogRootProps } from '@ark-ui/svelte/dialog';

  let { children, ...rest }: DialogRootProps = $props();
</script>

<DialogRoot {...rest}>
  {@render children?.()}
</DialogRoot>
