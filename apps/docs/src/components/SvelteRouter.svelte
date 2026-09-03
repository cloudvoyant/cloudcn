<!-- apps/docs/src/components/SvelteRouter.svelte -->
<script lang="ts">
  import type { Component } from 'svelte';

  let { component, example } = $props<{ component: string; example: string }>();

  const svelteModules = import.meta.glob('./examples/*/*/svelte.svelte');

  let Comp = $state<Component | null>(null);
  let error = $state(false);

  $effect(() => {
    const path = `./examples/${component}/${example}/svelte.svelte`;
    const importFn = svelteModules[path] as (() => Promise<{ default: Component }>) | undefined;
    
    if (importFn) {
      importFn()
        .then((m) => {
          Comp = m.default;
          error = false;
        })
        .catch(() => {
          error = true;
        });
    } else {
      error = true;
    }
  });
</script>

{#if error}
  <div class="text-sm text-red-500 p-4">Svelte example not found: {component}/{example}</div>
{:else if Comp}
  <Comp />
{:else}
  <div class="text-sm text-muted-foreground p-4">Loading Svelte...</div>
{/if}
