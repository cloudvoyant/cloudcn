<!-- libs/helix-svelte/src/tooltip/TooltipRender.svelte -->
<!-- Closely based on: Ark UI tooltip (@ark-ui/svelte/tooltip), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TooltipContext } from '@ark-ui/svelte/tooltip';

  let { render }: import('@ark-ui/svelte/tooltip').TooltipContextProps = $props();
</script>

<TooltipContext {render} />
