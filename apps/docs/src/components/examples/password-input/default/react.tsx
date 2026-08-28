// apps/docs/src/components/examples/password-input/default/react.tsx
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

export default function ReactPasswordInputDefault() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput>
        <PasswordInputControl>
          <PasswordInputInput defaultValue="hunter2" />
          <PasswordVisibilityToggle />
        </PasswordInputControl>
      </PasswordInput>
    </Field>
  );
}
