<!-- apps/docs/src/components/examples/input/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldHint, Input } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldHint>We'll never share your email.</FieldHint>
</Field>
