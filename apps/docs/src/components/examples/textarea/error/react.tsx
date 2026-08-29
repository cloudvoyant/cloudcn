// apps/docs/src/components/examples/textarea/error/react.tsx
import { Field, FieldLabel, Textarea, FieldError } from '@cloudvoyant/helix-react';

export default function ReactTextareaError() {
  return (
    <Field className="max-w-sm" invalid>
      <FieldLabel>Message</FieldLabel>
      <Textarea placeholder="Type your message…" rows={4} defaultValue="" />
      <FieldError>Message is required.</FieldError>
    </Field>
  );
}
