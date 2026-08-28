// apps/docs/src/components/examples/combobox/sizes/react.tsx
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

export default function ReactComboboxSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Combobox key={size} items={ITEMS} defaultValue={['react']}>
          <ComboboxControl>
            <ComboboxInput size={size} placeholder="Pick a framework…" />
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
      ))}
    </div>
  );
}
