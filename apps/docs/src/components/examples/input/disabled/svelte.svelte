<!-- apps/docs/src/components/examples/input/disabled/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" disabled />
</Field>
