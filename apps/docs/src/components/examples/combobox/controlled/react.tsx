// apps/docs/src/components/examples/combobox/controlled/react.tsx
import { useState } from 'react';
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
  { value: 'vue', label: 'Vue' },
];

export default function ReactComboboxControlled() {
  const [value, setValue] = useState(['react']);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Combobox items={ITEMS} value={value} onValueChange={(e) => setValue(e.value)}>
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
      <output data-testid="value">{value[0]}</output>
      <button type="button" data-testid="reset" onClick={() => setValue(['react'])}>
        Reset
      </button>
    </div>
  );
}
