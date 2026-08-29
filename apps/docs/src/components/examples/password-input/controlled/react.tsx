// apps/docs/src/components/examples/password-input/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { PasswordInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputControlled() {
  const [value, setValue] = useState('initial');
  return (
    <Field className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="••••••••" />
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('initial')}>
        Reset
      </button>
    </Field>
  );
}
