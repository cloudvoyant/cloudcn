// apps/docs/src/components/examples/multi-select/default/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

export default function ReactMultiSelectDefault() {
  return (
    <MultiSelect items={items} placeholder="Search framework…" className="max-w-xs">
      {items.map((item) => (
        <MultiSelectItem key={item.value} item={item} />
      ))}
    </MultiSelect>
  );
}
