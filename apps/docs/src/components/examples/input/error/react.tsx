// apps/docs/src/components/examples/input/error/react.tsx
import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-react';

export default function ReactInputError() {
  return (
    <Field className="max-w-sm" invalid>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" defaultValue="not-an-email" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  );
}
