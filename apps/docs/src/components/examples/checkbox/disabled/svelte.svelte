<!-- apps/docs/src/components/examples/checkbox/disabled/svelte.svelte -->
<script lang="ts">
  import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-svelte';
  import { Check } from 'lucide-svelte';
</script>

<Checkbox disabled checked>
  <CheckboxControl>
    <CheckboxIndicator>
      <Check />
    </CheckboxIndicator>
  </CheckboxControl>
  <CheckboxLabel>Accept terms</CheckboxLabel>
</Checkbox>
