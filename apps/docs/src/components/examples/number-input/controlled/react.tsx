// apps/docs/src/components/examples/number-input/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputControlled() {
  const [value, setValue] = useState('12.5');
  return (
    <Field className="max-w-sm">
      <FieldLabel>Controlled number</FieldLabel>
      <NumberInput
        value={value}
        onValueChange={(e) => setValue(e.value)}
        formatOptions={{ style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
      >
        <NumberInputInput />
      </NumberInput>
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('12.5')}>
        Reset
      </button>
    </Field>
  );
}
