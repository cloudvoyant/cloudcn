<!-- apps/docs/src/components/examples/input/labels-hints/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input, FieldHint } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldHint>We'll never share your email.</FieldHint>
</Field>
