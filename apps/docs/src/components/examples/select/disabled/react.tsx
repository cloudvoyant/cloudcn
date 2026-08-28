// apps/docs/src/components/examples/select/disabled/react.tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
} from '@cloudvoyant/helix-react';

const ITEMS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

export default function ReactSelectDisabled() {
  return (
    <Select items={ITEMS} defaultValue={['apple']} disabled className="max-w-xs">
      <SelectTrigger>
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        {ITEMS.map((item) => (
          <SelectItem key={item.value} item={item}>
            <SelectItemText>{item.label}</SelectItemText>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
