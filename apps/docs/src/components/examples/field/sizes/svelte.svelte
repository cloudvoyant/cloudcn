<!-- apps/docs/src/components/examples/field/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input } from '@cloudvoyant/helix-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <Input {size} placeholder="you@example.com" />
    </Field>
  {/each}
</div>
