<!-- apps/docs/src/components/examples/switch/controlled/svelte.svelte -->
<script lang="ts">
  import { Switch, SwitchLabel } from '@cloudvoyant/helix-svelte';
  let checked = $state(true);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <Switch bind:checked>
    <SwitchLabel>Airplane mode</SwitchLabel>
  </Switch>
  <output data-testid="value">{checked}</output>
  <button type="button" data-testid="reset" onclick={() => (checked = true)}>Reset</button>
</div>
