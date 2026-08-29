<!-- apps/docs/src/components/examples/select/search/SearchItems.svelte -->
<script lang="ts">
  import { useSelect, SelectItem } from '@cloudvoyant/helix-svelte';
  const api = useSelect();
  const items = $derived(api()?.items ?? []);
</script>

{#each items as item (item.value)}
  <SelectItem {item} />
{/each}
