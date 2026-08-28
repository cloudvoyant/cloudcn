// apps/docs/src/components/examples/input/disabled/react.tsx
import { Field, FieldLabel, Input } from '@cloudvoyant/helix-react';

export default function ReactInputDisabled() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" disabled />
    </Field>
  );
}
