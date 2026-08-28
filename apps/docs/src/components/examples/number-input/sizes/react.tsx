// apps/docs/src/components/examples/number-input/sizes/react.tsx
import { Field, FieldLabel } from '@cloudvoyant/helix-react';
import { NumberInput, NumberInputInput } from '@cloudvoyant/helix-react';

export default function ReactNumberInputSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Field key={size}>
          <FieldLabel>Size {size}</FieldLabel>
          <NumberInput defaultValue="5">
            <NumberInputInput size={size} />
          </NumberInput>
        </Field>
      ))}
    </div>
  );
}
