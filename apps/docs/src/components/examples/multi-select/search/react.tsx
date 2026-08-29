// apps/docs/src/components/examples/multi-select/search/react.tsx
import { MultiSelect, MultiSelectItem } from '@cloudvoyant/helix-react';

const ALL = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'angular', label: 'Angular' },
  { value: 'ember', label: 'Ember' },
  { value: 'alpine', label: 'Alpine' },
  { value: 'lit', label: 'Lit' },
  { value: 'preact', label: 'Preact' },
  { value: 'qwik', label: 'Qwik' },
];

export default function ReactMultiSelectSearch() {
  return (
    <MultiSelect
      multiple
      items={ALL}
      defaultValue={['react', 'svelte']}
      placeholder="Search frameworks…"
      className="max-w-sm"
    >
      {ALL.map((item) => (
        <MultiSelectItem key={item.value} item={item} />
      ))}
    </MultiSelect>
  );
}
