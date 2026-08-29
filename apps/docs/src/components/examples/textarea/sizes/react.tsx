// apps/docs/src/components/examples/textarea/sizes/react.tsx
import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-react';

export default function ReactTextareaSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <Textarea size={size} rows={3} placeholder="Type your message…" />
        </Field>
      ))}
    </div>
  );
}
