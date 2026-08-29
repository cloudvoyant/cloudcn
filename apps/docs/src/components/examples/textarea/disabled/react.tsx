// apps/docs/src/components/examples/textarea/disabled/react.tsx
import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-react';

export default function ReactTextareaDisabled() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Message</FieldLabel>
      <Textarea placeholder="Type your message…" rows={4} disabled />
    </Field>
  );
}
