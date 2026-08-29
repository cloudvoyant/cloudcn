// apps/docs/src/components/examples/multi-select/icons/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';
import { Fingerprint, KeyRound, CreditCard, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { value: 'ssh', label: 'SSH Keys' },
  { value: 'credit', label: 'Credit Cards' },
  { value: 'api', label: 'API Keys' },
  { value: '2fa', label: 'Two-Factor' },
];

const ICONS: Record<string, typeof Fingerprint> = {
  ssh: Fingerprint,
  credit: CreditCard,
  api: KeyRound,
  '2fa': ShieldCheck,
};

export default function ReactMultiSelectIcons() {
  return (
    <MultiSelect
      multiple
      items={ITEMS}
      defaultValue={['ssh', 'api']}
      placeholder="Select login methods…"
      className="max-w-sm"
    >
      {ITEMS.map((item) => {
        const Icon = ICONS[item.value];
        return (
          <MultiSelectItem key={item.value} item={item}>
            <Icon className="size-4" />
            {item.label}
          </MultiSelectItem>
        );
      })}
    </MultiSelect>
  );
}
