<!-- apps/docs/src/components/SvelteRouter.svelte -->
<script lang="ts">
  import type { Component } from 'svelte';

  let { component, example } = $props<{ component: string; example: string }>();

  const svelteModules = import.meta.glob('./examples/*/*/svelte.svelte', { eager: true });

  const path = $derived(`./examples/${component}/${example}/svelte.svelte`);
  const module = $derived(svelteModules[path] as { default: Component } | undefined);
  const Comp = $derived(module?.default);
</script>

{#if !module}
  <div class="text-sm text-red-500 p-4">Svelte example not found: {component}/{example}</div>
{:else if Comp}
  <Comp />
{/if}
