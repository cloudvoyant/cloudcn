<!-- libs/vertex-svelte/src/tooltip/TooltipRender.svelte -->
<!-- Closely based on: Ark UI tooltip (@ark-ui/svelte/tooltip), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { TooltipContext } from '@ark-ui/svelte/tooltip';

  let { render }: import('@ark-ui/svelte/tooltip').TooltipContextProps = $props();
</script>

<TooltipContext {render} />
