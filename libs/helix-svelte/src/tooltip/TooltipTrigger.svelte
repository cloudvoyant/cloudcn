<!-- libs/helix-svelte/src/tooltip/TooltipTrigger.svelte -->
<!-- Closely based on: Ark UI tooltip (@ark-ui/svelte/tooltip), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TooltipTrigger, type TooltipTriggerProps } from '@ark-ui/svelte/tooltip';

  type Props = TooltipTriggerProps & { class?: string };

  let { class: className = '', children, ...rest }: Props = $props();
</script>

<TooltipTrigger class={className} {...rest}>
  {#if children}{@render children()}{/if}
</TooltipTrigger>
