<!-- apps/docs/src/components/examples/multi-select/controlled/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  const ITEMS = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];
  let value = $state(['react']);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <MultiSelect multiple items={ITEMS} bind:value placeholder="Pick a framework…">
    {#each ITEMS as item}
      <MultiSelectItem {item} />
    {/each}
  </MultiSelect>
  <output data-testid="value">{value.join(', ')}</output>
  <button type="button" data-testid="reset" onclick={() => (value = ['react'])}>Reset</button>
</div>
