<!-- apps/docs/src/components/examples/textarea/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Message</FieldLabel>
  <Textarea placeholder="Type your message…" rows={4} />
</Field>
