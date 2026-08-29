// apps/docs/src/components/examples/checkbox/controlled/react.tsx
import { useState } from 'react';
import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-react';
import { Check } from 'lucide-react';

export default function ReactCheckboxControlled() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Checkbox checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
        <CheckboxControl>
          <CheckboxIndicator>
            <Check />
          </CheckboxIndicator>
        </CheckboxControl>
        <CheckboxLabel>Accept terms</CheckboxLabel>
      </Checkbox>
      <output data-testid="value">{String(checked)}</output>
      <button type="button" data-testid="reset" onClick={() => setChecked(true)}>
        Reset
      </button>
    </div>
  );
}
