// apps/docs/src/components/examples/field/error/react.tsx
import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-react';

export default function ReactFieldError() {
  return (
    <Field className="max-w-sm" invalid>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" defaultValue="jane" />
      <FieldError>Please enter a valid email.</FieldError>
    </Field>
  );
}
