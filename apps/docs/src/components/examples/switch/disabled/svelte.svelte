<!-- apps/docs/src/components/examples/switch/disabled/svelte.svelte -->
<script lang="ts">
  import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/helix-svelte';
</script>

<Switch disabled checked>
  <SwitchControl>
    <SwitchThumb />
  </SwitchControl>
  <SwitchLabel>Airplane mode</SwitchLabel>
</Switch>
