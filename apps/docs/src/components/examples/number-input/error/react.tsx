// apps/docs/src/components/examples/number-input/error/react.tsx
import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-react';
import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputError() {
  return (
    <Field className="max-w-xs" invalid>
      <FieldLabel>Quantity</FieldLabel>
      <NumberInput defaultValue="0" min={1} max={10}>
        <NumberInputInput />
      </NumberInput>
      <FieldError>Invalid number.</FieldError>
    </Field>
  );
}
