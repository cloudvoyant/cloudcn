// apps/docs/src/components/examples/select/controlled/react.tsx
import { useState } from 'react';
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
  { value: 'cherry', label: 'Cherry' },
];

export default function ReactSelectControlled() {
  const [value, setValue] = useState(['banana']);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Select items={ITEMS} value={value} onValueChange={(e) => setValue(e.value)}>
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
      <output data-testid="value">{value[0]}</output>
      <button type="button" data-testid="reset" onClick={() => setValue(['banana'])}>
        Reset
      </button>
    </div>
  );
}
