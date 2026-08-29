// apps/docs/src/components/examples/field-group/default/react.tsx
import { FieldGroup, FieldGroupLegend, Field } from '@cloudvoyant/helix-react';
import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-react';
import { Check } from 'lucide-react';

export default function ReactFieldGroupDefault() {
  return (
    <FieldGroup className="max-w-sm">
      <FieldGroupLegend>Newsletter preferences</FieldGroupLegend>
      <Field>
        <Checkbox defaultChecked>
          <CheckboxControl>
            <CheckboxIndicator>
              <Check />
            </CheckboxIndicator>
          </CheckboxControl>
          <CheckboxLabel>Weekly digest</CheckboxLabel>
        </Checkbox>
      </Field>
      <Field>
        <Checkbox>
          <CheckboxControl>
            <CheckboxIndicator>
              <Check />
            </CheckboxIndicator>
          </CheckboxControl>
          <CheckboxLabel>Product updates</CheckboxLabel>
        </Checkbox>
      </Field>
    </FieldGroup>
  );
}
