// apps/docs/src/components/examples/input/sizes/react.tsx
import { Field, FieldLabel, Input } from '@cloudvoyant/helix-react';

export default function ReactInputSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <Input size={size} placeholder="you@example.com" />
        </Field>
      ))}
    </div>
  );
}
