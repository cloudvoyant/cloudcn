// apps/docs/src/components/examples/select/error/react.tsx
import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
} from '@cloudvoyant/helix-react';

const ITEMS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

export default function ReactSelectError() {
  return (
    <Field className="max-w-xs" invalid>
      <FieldLabel>Fruit</FieldLabel>
      <Select items={ITEMS} defaultValue={[]}>
        <SelectTrigger>
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          {ITEMS.map((item) => (
            <SelectItem key={item.value} item={item}>
              <SelectItemText>{item.label}</SelectItemText>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError>Please pick a fruit.</FieldError>
    </Field>
  );
}
