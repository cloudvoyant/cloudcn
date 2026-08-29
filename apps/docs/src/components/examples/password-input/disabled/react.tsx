// apps/docs/src/components/examples/password-input/disabled/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { PasswordInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputDisabled() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput placeholder="••••••••" disabled />
    </Field>
  );
}
