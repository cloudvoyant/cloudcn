<!-- libs/helix-svelte/src/multi-select/MultiSelectChips.svelte (internal) -->
<script lang="ts">
  import { useComboboxContext } from '@ark-ui/svelte/combobox';
  import { multiSelectChipBase, multiSelectChipDeleteTriggerBase } from '@cloudvoyant/helix';

  let { items }: { items?: { value: string; label: string }[] } = $props();

  const api = useComboboxContext();
  const selected = $derived(api().value);
</script>

{#each selected as value (value)}
  {@const item = items?.find((i) => i.value === value)}
  {#if item}
    <span class={multiSelectChipBase}>
      {item.label}
      <button
        type="button"
        aria-label="Remove {item.label}"
        class={multiSelectChipDeleteTriggerBase}
        onclick={() => api().setValue(selected.filter((v) => v !== value))}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
    </span>
  {/if}
{/each}
