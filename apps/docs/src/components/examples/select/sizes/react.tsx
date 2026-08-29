// apps/docs/src/components/examples/select/sizes/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { Select, SelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

export default function ReactSelectSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <Select size={size} items={items} defaultValue={['apple']}>
            {items.map((item) => (
              <SelectItem key={item.value} item={item} />
            ))}
          </Select>
        </Field>
      ))}
    </div>
  );
}
