// apps/docs/src/components/examples/select/disabled/react.tsx
import { Select, SelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

export default function ReactSelectDisabled() {
  return (
    <Select items={items} defaultValue={['apple']} disabled className="max-w-xs">
      {items.map((item) => (
        <SelectItem key={item.value} item={item} />
      ))}
    </Select>
  );
}
