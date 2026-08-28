// apps/docs/src/components/examples/number-input/format/react.tsx
import { Field, FieldLabel, FieldPrefix } from '@cloudvoyant/helix-react';
import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-react';
import { DollarSign } from 'lucide-react';

export default function ReactNumberInputFormat() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Price</FieldLabel>
      <div className="flex items-center gap-2">
        <FieldPrefix>
          <DollarSign />
        </FieldPrefix>
        <NumberInput
          defaultValue="12.50"
          formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
        >
          <NumberInputInput />
        </NumberInput>
      </div>
    </Field>
  );
}
