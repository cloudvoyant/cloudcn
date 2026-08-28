// apps/docs/src/components/examples/number-input/default/react.tsx
import { Field, FieldLabel, FieldPrefix, FieldSuffix } from '@cloudvoyant/helix-react';
import { NumberInput, NumberInputInput, NumberInputValueText } from '@cloudvoyant/helix-react';
import { GripVertical } from 'lucide-react';

export default function ReactNumberInputDefault() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Quantity</FieldLabel>
      <div className="flex items-center gap-2">
        <FieldPrefix>
          <GripVertical />
        </FieldPrefix>
        <NumberInput min={0} max={10} defaultValue="5" formatOptions={{ maximumFractionDigits: 0 }}>
          <NumberInputInput />
          <NumberInputValueText />
        </NumberInput>
        <FieldSuffix>units</FieldSuffix>
      </div>
    </Field>
  );
}
