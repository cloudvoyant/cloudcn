<!-- apps/docs/src/components/examples/checkbox/controlled/svelte.svelte -->
<script lang="ts">
  import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-svelte';
  import { Check } from 'lucide-svelte';
  let checked = $state(true);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <Checkbox bind:checked>
    <CheckboxControl>
      <CheckboxIndicator>
        <Check />
      </CheckboxIndicator>
    </CheckboxControl>
    <CheckboxLabel>Accept terms</CheckboxLabel>
  </Checkbox>
  <output data-testid="value">{checked}</output>
  <button type="button" data-testid="reset" onclick={() => (checked = true)}>Reset</button>
</div>
