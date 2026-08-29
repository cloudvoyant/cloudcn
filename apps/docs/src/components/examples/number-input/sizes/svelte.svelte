<!-- apps/docs/src/components/examples/number-input/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel } from '@cloudvoyant/helix-svelte';
  import { NumberInput } from '@cloudvoyant/helix-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <NumberInput {size} value="5" />
    </Field>
  {/each}
</div>
