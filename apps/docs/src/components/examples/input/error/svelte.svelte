<!-- apps/docs/src/components/examples/input/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm" invalid>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" value="not-an-email" />
  <FieldError>Enter a valid email address.</FieldError>
</Field>
