// apps/docs/src/components/examples/multi-select/multiple/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

export default function ReactMultiSelectMultiple() {
  return (
    <MultiSelect
      multiple
      items={items}
      defaultValue={['react', 'svelte']}
      placeholder="Select frameworks…"
      className="max-w-xs"
    >
      {items.map((item) => (
        <MultiSelectItem key={item.value} item={item} />
      ))}
    </MultiSelect>
  );
}
