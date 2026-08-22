<!-- libs/cloudcn-svelte/src/ToggleButtonIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/toggle (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { ToggleIndicator, type ToggleIndicatorProps } from '@ark-ui/svelte/toggle';

  let { ...rest }: ToggleIndicatorProps = $props();
</script>

<ToggleIndicator {...rest} />
