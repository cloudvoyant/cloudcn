<!-- apps/docs/src/components/examples/checkbox/sizes/svelte.svelte -->
<script lang="ts">
  import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@cloudvoyant/helix-svelte';
  import { Check } from 'lucide-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex flex-col gap-3">
  {#each sizes as size}
    <Checkbox {size}>
      <CheckboxControl>
        <CheckboxIndicator>
          <Check />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Size {size}</CheckboxLabel>
    </Checkbox>
  {/each}
</div>
