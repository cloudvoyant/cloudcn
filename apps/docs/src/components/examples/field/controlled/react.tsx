// apps/docs/src/components/examples/field/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-react';

export default function ReactFieldControlled() {
  const [value, setValue] = useState('initial');
  return (
    <Field className="max-w-sm" invalid={value === ''}>
      <FieldLabel>Controlled field</FieldLabel>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      {value === '' && <FieldError>Required.</FieldError>}
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('initial')}>
        Reset
      </button>
    </Field>
  );
}
