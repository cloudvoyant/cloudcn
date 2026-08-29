<!-- apps/docs/src/components/examples/multi-select/icons/svelte.svelte -->
<script lang="ts">
  import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-svelte';
  import { Fingerprint, KeyRound, CreditCard, ShieldCheck } from 'lucide-svelte';
  const items = [
    { value: 'ssh', label: 'SSH Keys' },
    { value: 'credit', label: 'Credit Cards' },
    { value: 'api', label: 'API Keys' },
    { value: '2fa', label: 'Two-Factor' },
  ];
  const icons = { ssh: Fingerprint, credit: CreditCard, api: KeyRound, '2fa': ShieldCheck };
</script>

<MultiSelect multiple {items} defaultValue={['ssh', 'api']} placeholder="Select login methods…" class="max-w-sm">
  {#each items as item (item.value)}
    {@const Icon = icons[item.value]}
    <MultiSelectItem {item}>
      <Icon class="size-4" />
      {item.label}
    </MultiSelectItem>
  {/each}
</MultiSelect>
