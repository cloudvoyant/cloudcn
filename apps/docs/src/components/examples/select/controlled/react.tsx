// apps/docs/src/components/examples/select/controlled/react.tsx
import { useState } from 'react';
import { Select, SelectItem } from '@cloudvoyant/helix-react';

const ITEMS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

export default function ReactSelectControlled() {
  const [value, setValue] = useState(['banana']);
  return (
    <div className="flex max-w-xs flex-col gap-2">
      <Select items={ITEMS} value={value} onValueChange={(e) => setValue(e.value)} className="w-full">
        {ITEMS.map((item) => (
          <SelectItem key={item.value} item={item} />
        ))}
      </Select>
      <output data-testid="value">{value[0]}</output>
      <button type="button" data-testid="reset" onClick={() => setValue(['banana'])}>
        Reset
      </button>
    </div>
  );
}
