<!-- apps/docs/src/components/examples/input/char-count/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input } from '@cloudvoyant/helix-svelte';
  const MAX = 100;
  let value = $state('');
</script>

<Field class="max-w-sm">
  <div class="flex w-full items-center justify-between">
    <FieldLabel>Bio</FieldLabel>
    <span class="text-xs text-muted-foreground">{value.length}/{MAX}</span>
  </div>
  <Input maxLength={MAX} bind:value={value} placeholder="Tell us about yourself…" />
</Field>
