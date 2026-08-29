<!-- apps/docs/src/components/examples/select/icons/svelte.svelte -->
<script lang="ts">
  import { Select, SelectItem } from '@cloudvoyant/helix-svelte';
  import { Fingerprint, KeyRound, CreditCard, ShieldCheck } from 'lucide-svelte';
  const items = [
    { value: 'ssh', label: 'SSH Keys' },
    { value: 'credit', label: 'Credit Cards' },
    { value: 'api', label: 'API Keys' },
    { value: '2fa', label: 'Two-Factor' },
  ];
  const icons = { ssh: Fingerprint, credit: CreditCard, api: KeyRound, '2fa': ShieldCheck };
</script>

<Select {items} defaultValue={['ssh']} placeholder="Choose a login method" class="max-w-xs">
  {#each items as item (item.value)}
    {@const Icon = icons[item.value]}
    <SelectItem {item}>
      <Icon class="size-4" />
      {item.label}
    </SelectItem>
  {/each}
</Select>
