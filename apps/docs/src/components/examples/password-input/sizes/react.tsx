// apps/docs/src/components/examples/password-input/sizes/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { PasswordInput, PasswordInputControl, PasswordInputInput } from '@cloudvoyant/helix-react';

export default function ReactPasswordInputSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <PasswordInput>
            <PasswordInputControl>
              <PasswordInputInput size={size} type="password" placeholder="••••••••" />
            </PasswordInputControl>
          </PasswordInput>
        </Field>
      ))}
    </div>
  );
}
