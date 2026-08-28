// apps/docs/src/components/examples/password-input/disabled/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputDisabled() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput>
        <PasswordInputControl>
          <PasswordInputInput type="password" placeholder="••••••••" disabled />
        </PasswordInputControl>
      </PasswordInput>
    </Field>
  );
}
