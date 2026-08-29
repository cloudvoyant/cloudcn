// apps/docs/src/components/examples/select/error/react.tsx
import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-react';
import { Select, SelectItem } from '@cloudvoyant/helix-react';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

export default function ReactSelectError() {
  return (
    <Field className="max-w-xs" invalid>
      <FieldLabel>Fruit</FieldLabel>
      <Select items={items} placeholder="Pick a fruit" className="w-full">
        {items.map((item) => (
          <SelectItem key={item.value} item={item} />
        ))}
      </Select>
      <FieldError>Please pick a fruit.</FieldError>
    </Field>
  );
}
