<!-- libs/helix-svelte/src/popover/PopoverProvider.svelte -->
<!-- Closely based on: Ark UI popover (@ark-ui/svelte/popover), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { PopoverRootProvider, type PopoverRootProviderProps } from '@ark-ui/svelte/popover';

  let { value, children, ...rest }: PopoverRootProviderProps = $props();
</script>

<PopoverRootProvider {value} {...rest}>
  {#if children}{@render children()}{/if}
</PopoverRootProvider>
