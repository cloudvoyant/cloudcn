// apps/docs/src/components/examples/password-input/controlled/react.tsx
import { useState } from 'react';
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
  usePasswordInput,
} from '@cloudvoyant/helix-react';
import { Eye, EyeOff } from 'lucide-react';

function PasswordVisibilityToggle() {
  const api = usePasswordInput();
  return (
    <PasswordInputVisibilityTrigger aria-label={api.visible ? 'Hide password' : 'Show password'}>
      {api.visible ? <EyeOff /> : <Eye />}
    </PasswordInputVisibilityTrigger>
  );
}

export default function ReactPasswordInputControlled() {
  const [value, setValue] = useState('initial');
  return (
    <Field className="max-w-sm">
      <FieldLabel>Controlled password</FieldLabel>
      <PasswordInput>
        <PasswordInputControl>
          <PasswordInputInput value={value} onChange={(e) => setValue(e.currentTarget.value)} />
          <PasswordVisibilityToggle />
        </PasswordInputControl>
      </PasswordInput>
      <output data-testid="value">{value}</output>
      <button type="button" data-testid="reset" onClick={() => setValue('initial')}>
        Reset
      </button>
    </Field>
  );
}
