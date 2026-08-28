// apps/docs/src/components/examples/select/sizes/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
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

export default function ReactSelectSizes() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <Select items={ITEMS} defaultValue={['apple']}>
            <SelectTrigger size={size}>
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
        </Field>
      ))}
    </div>
  );
}
