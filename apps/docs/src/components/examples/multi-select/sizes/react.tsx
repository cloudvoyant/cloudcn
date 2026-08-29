// apps/docs/src/components/examples/multi-select/sizes/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
];

export default function ReactMultiSelectSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <MultiSelect key={size} size={size} items={items} defaultValue={['react']} placeholder="Pick a framework…">
          {items.map((item) => (
            <MultiSelectItem key={item.value} item={item} />
          ))}
        </MultiSelect>
      ))}
    </div>
  );
}
