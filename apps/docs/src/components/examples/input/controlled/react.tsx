// apps/docs/src/components/examples/input/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Input } from '@cloudvoyant/helix-react';

export default function ReactInputControlled() {
  const [value, setValue] = useState('initial');
  return (
    <Field className="max-w-sm">
      <FieldLabel>Controlled input</FieldLabel>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('initial')}>
        Reset
      </button>
    </Field>
  );
}
