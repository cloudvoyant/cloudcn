// apps/docs/src/components/examples/select/default/react.tsx
import { Select, SelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

export default function ReactSelectDefault() {
  return (
    <Select items={items} defaultValue={['apple']} placeholder="Pick a fruit" className="max-w-xs">
      {items.map((item) => (
        <SelectItem key={item.value} item={item} />
      ))}
    </Select>
  );
}
