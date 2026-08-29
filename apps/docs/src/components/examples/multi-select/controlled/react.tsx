// apps/docs/src/components/examples/multi-select/controlled/react.tsx
import { useState } from 'react';
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const ITEMS = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

export default function ReactMultiSelectControlled() {
  const [value, setValue] = useState(['react']);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MultiSelect
        multiple
        items={ITEMS}
        value={value}
        onValueChange={(e) => setValue(e.value)}
        placeholder="Pick a framework…"
      >
        {ITEMS.map((item) => (
          <MultiSelectItem key={item.value} item={item} />
        ))}
      </MultiSelect>
      <output data-testid="value">{value[0]}</output>
      <button type="button" data-testid="reset" onClick={() => setValue(['react'])}>
        Reset
      </button>
    </div>
  );
}
