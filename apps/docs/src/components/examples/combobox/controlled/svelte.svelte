<!-- apps/docs/src/components/examples/combobox/controlled/svelte.svelte -->
<script lang="ts">
  import {
    Combobox,
    ComboboxControl,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxItemText,
  } from '@cloudvoyant/helix-svelte';
  const ITEMS = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ];
  let value = $state(['react']);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <Combobox items={ITEMS} bind:value>
    <ComboboxControl>
      <ComboboxInput placeholder="Pick a framework…" />
    </ComboboxControl>
    <ComboboxContent>
      <ComboboxList>
        {#each ITEMS as item}
          <ComboboxItem {item}>
            <ComboboxItemText>{item.label}</ComboboxItemText>
          </ComboboxItem>
        {/each}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
  <output data-testid="value">{value[0]}</output>
  <button type="button" data-testid="reset" onclick={() => (value = ['react'])}>Reset</button>
</div>
