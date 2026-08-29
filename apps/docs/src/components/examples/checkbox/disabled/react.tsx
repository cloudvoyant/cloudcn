// apps/docs/src/components/examples/checkbox/disabled/react.tsx
import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-react';
import { Check } from 'lucide-react';

export default function ReactCheckboxDisabled() {
  return (
    <Checkbox disabled defaultChecked>
      <CheckboxControl>
        <CheckboxIndicator>
          <Check />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Accept terms</CheckboxLabel>
    </Checkbox>
  );
}
