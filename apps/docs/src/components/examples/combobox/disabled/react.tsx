// apps/docs/src/components/examples/combobox/disabled/react.tsx
import {
  Combobox,
  ComboboxControl,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxItemText,
} from '@cloudvoyant/helix-react';

const ITEMS = [
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
];

export default function ReactComboboxDisabled() {
  return (
    <Combobox items={ITEMS} defaultValue={['react']} disabled className="max-w-sm">
      <ComboboxControl>
        <ComboboxInput placeholder="Pick a framework…" />
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList>
          {ITEMS.map((item) => (
            <ComboboxItem key={item.value} item={item}>
              <ComboboxItemText>{item.label}</ComboboxItemText>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
