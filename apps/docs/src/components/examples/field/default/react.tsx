// apps/docs/src/components/examples/field/default/react.tsx
import { Field, FieldLabel, FieldRequiredIndicator, Input, FieldHint } from '@cloudvoyant/helix-react';

export default function ReactFieldDefault() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>
        Username<FieldRequiredIndicator> *</FieldRequiredIndicator>
      </FieldLabel>
      <Input placeholder="jane" />
      <FieldHint>Pick something memorable.</FieldHint>
    </Field>
  );
}
