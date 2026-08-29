// apps/docs/src/components/examples/number-input/disabled/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { NumberInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputDisabled() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Quantity</FieldLabel>
      <NumberInput defaultValue="5" disabled />
    </Field>
  );
}
