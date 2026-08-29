// apps/docs/src/components/examples/password-input/sizes/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { PasswordInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <PasswordInput size={size} placeholder="••••••••" />
        </Field>
      ))}
    </div>
  );
}
