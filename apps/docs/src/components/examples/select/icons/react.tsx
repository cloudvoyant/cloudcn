// apps/docs/src/components/examples/select/icons/react.tsx
import { Select, SelectItem } from '@cloudvoyant/helix-react';
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

export default function ReactSelectIcons() {
  return (
    <Select
      items={ITEMS}
      defaultValue={['ssh']}
      placeholder="Choose a login method"
      className="max-w-xs"
      renderValue={(item) => {
        const Icon = ICONS[item.value];
        return (
          <span className="flex items-center gap-2">
            <Icon className="size-4" />
            {item.label}
          </span>
        );
      }}
    >
      {ITEMS.map((item) => {
        const Icon = ICONS[item.value];
        return (
          <SelectItem key={item.value} item={item}>
            <Icon className="size-4" />
            {item.label}
          </SelectItem>
        );
      })}
    </Select>
  );
}
