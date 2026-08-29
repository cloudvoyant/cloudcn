// apps/docs/src/components/examples/field/submit-validation/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-react';

export default function ReactFieldSubmitValidation() {
  const [value, setValue] = useState('');
  const [invalid, setInvalid] = useState(false);
  return (
    <Field className="max-w-sm" invalid={invalid}>
      <FieldLabel>Username</FieldLabel>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      {invalid && <FieldError>Username is required.</FieldError>}
      <button
        type="button"
        className="mt-1 inline-flex h-9 items-center rounded-md border border-input px-3 text-sm font-medium"
        onClick={() => setInvalid(value.trim().length === 0)}
      >
        Submit
      </button>
    </Field>
  );
}
