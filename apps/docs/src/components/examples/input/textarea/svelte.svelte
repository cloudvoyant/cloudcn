<!-- apps/docs/src/components/examples/input/textarea/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea } from '@cloudvoyant/vertex-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Message</FieldLabel>
  <Textarea placeholder="Type your message…" rows={4} />
</Field>
