// apps/docs/src/components/examples/textarea/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-react';

export default function ReactTextareaControlled() {
  const [value, setValue] = useState('initial');
  return (
    <Field className="max-w-sm">
      <FieldLabel>Controlled textarea</FieldLabel>
      <Textarea value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('initial')}>
        Reset
      </button>
    </Field>
  );
}
