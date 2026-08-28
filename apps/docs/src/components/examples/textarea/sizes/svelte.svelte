<!-- apps/docs/src/components/examples/textarea/sizes/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-svelte';
  const sizes = ['sm', 'md', 'lg'] as const;
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
  {#each sizes as size}
    <Field>
      <FieldLabel>Size {size}</FieldLabel>
      <Textarea {size} rows={3} placeholder="Type your message…" />
    </Field>
  {/each}
</div>
