<!-- apps/docs/src/components/examples/textarea/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Textarea, FieldError } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm" invalid>
  <FieldLabel>Message</FieldLabel>
  <Textarea placeholder="Type your message…" rows={4} />
  <FieldError>Message is required.</FieldError>
</Field>
