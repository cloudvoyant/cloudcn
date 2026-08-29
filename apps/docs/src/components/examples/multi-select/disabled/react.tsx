// apps/docs/src/components/examples/multi-select/disabled/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
];

export default function ReactMultiSelectDisabled() {
  return (
    <MultiSelect multiple items={items} defaultValue={['react']} disabled className="max-w-sm">
      {items.map((item) => (
        <MultiSelectItem key={item.value} item={item} />
      ))}
    </MultiSelect>
  );
}
