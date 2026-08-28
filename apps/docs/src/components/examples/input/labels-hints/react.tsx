// apps/docs/src/components/examples/input/labels-hints/react.tsx
import { Field, FieldLabel, Input, FieldHint } from '@cloudvoyant/helix-react';

export default function ReactInputLabelsHints() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
      <FieldHint>We'll never share your email.</FieldHint>
    </Field>
  );
}
