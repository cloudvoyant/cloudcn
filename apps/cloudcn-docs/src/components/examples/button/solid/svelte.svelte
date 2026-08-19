<!-- apps/cloudcn-docs/src/components/examples/button/solid/svelte.svelte -->
<script lang="ts">
  import { Button } from 'cloudcn-svelte';

  const COLORS = [
    { name: 'Primary', color: 'primary' },
    { name: 'Secondary', color: 'secondary' },
    { name: 'Success', color: 'success' },
    { name: 'Danger', color: 'danger' },
    { name: 'Warn', color: 'warn' },
    { name: 'Info', color: 'info' },
  ] as const;
</script>

<div class="flex flex-wrap items-center gap-3">
  {#each COLORS as { name, color }}
    <Button {color}>{name}</Button>
  {/each}
</div>
