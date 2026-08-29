// apps/docs/src/components/examples/textarea/default/react.tsx
import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-react';

export default function ReactTextareaDefault() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Message</FieldLabel>
      <Textarea placeholder="Type your message…" rows={4} />
    </Field>
  );
}
