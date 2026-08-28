// apps/docs/src/components/examples/input/default/react.tsx
import { Field, FieldLabel, FieldHint, Input } from '@cloudvoyant/helix-react';

export default function ReactInputDefault() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
      <FieldHint>We'll never share your email.</FieldHint>
    </Field>
  );
}
