// apps/docs/src/components/examples/number-input/default/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { NumberInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputDefault() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Quantity</FieldLabel>
      <NumberInput min={0} max={10} defaultValue="5" formatOptions={{ maximumFractionDigits: 0 }} />
    </Field>
  );
}
