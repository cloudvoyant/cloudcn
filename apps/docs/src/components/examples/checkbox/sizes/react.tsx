// apps/docs/src/components/examples/checkbox/sizes/react.tsx
import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-react';
import { Check } from 'lucide-react';

export default function ReactCheckboxSizes() {
  return (
    <div className="flex flex-col gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Checkbox key={size} size={size}>
          <CheckboxControl>
            <CheckboxIndicator>
              <Check />
            </CheckboxIndicator>
          </CheckboxControl>
          <CheckboxLabel>Size {size}</CheckboxLabel>
        </Checkbox>
      ))}
    </div>
  );
}
