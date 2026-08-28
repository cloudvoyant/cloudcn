<!-- apps/docs/src/components/examples/switch/sizes/svelte.svelte -->
<script lang="ts">
  import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/helix-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex flex-col gap-3">
  {#each sizes as size}
    <Switch {size}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Size {size}</SwitchLabel>
    </Switch>
  {/each}
</div>
