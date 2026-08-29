// apps/docs/src/components/examples/number-input/format/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { NumberInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputFormat() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Price</FieldLabel>
      <NumberInput
        defaultValue="12.50"
        formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
      />
    </Field>
  );
}
