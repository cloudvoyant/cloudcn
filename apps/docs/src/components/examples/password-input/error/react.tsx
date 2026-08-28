// apps/docs/src/components/examples/password-input/error/react.tsx
import { Field, FieldLabel, FieldError } from '@cloudvoyant/helix-react';
import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputError() {
  return (
    <Field className="max-w-sm" invalid>
      <FieldLabel>Password</FieldLabel>
      <PasswordInput>
        <PasswordInputControl>
          <PasswordInputInput type="password" defaultValue="short" />
        </PasswordInputControl>
      </PasswordInput>
      <FieldError>Must be at least 8 characters.</FieldError>
    </Field>
  );
}
