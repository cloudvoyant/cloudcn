<!-- apps/docs/src/components/examples/textarea/char-count/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-svelte';
  const MAX = 280;
  let value = $state('');
</script>

<Field class="max-w-sm">
  <div class="flex w-full items-center justify-between">
    <FieldLabel>Tweet</FieldLabel>
    <span class="text-xs text-muted-foreground">{value.length}/{MAX}</span>
  </div>
  <Textarea maxLength={MAX} rows={3} bind:value={value} placeholder="What's happening?" />
</Field>
