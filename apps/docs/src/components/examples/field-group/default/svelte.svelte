<!-- apps/docs/src/components/examples/field-group/default/svelte.svelte -->
<script lang="ts">
  import { FieldGroup, FieldGroupLegend, Field } from '@cloudvoyant/helix-svelte';
  import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-svelte';
  import { Check } from 'lucide-svelte';
</script>

<FieldGroup class="max-w-sm">
  <FieldGroupLegend>Newsletter preferences</FieldGroupLegend>
  <Field>
    <Checkbox checked>
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
