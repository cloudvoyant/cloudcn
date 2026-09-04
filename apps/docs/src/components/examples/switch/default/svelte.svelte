<!-- apps/docs/src/components/examples/switch/default/svelte.svelte -->
<script lang="ts">
  import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/vortex-svelte';
</script>

<Switch defaultChecked>
  <SwitchControl>
    <SwitchThumb />
  </SwitchControl>
  <SwitchLabel>Airplane mode</SwitchLabel>
</Switch>
