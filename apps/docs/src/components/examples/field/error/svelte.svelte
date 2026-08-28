<!-- apps/docs/src/components/examples/field/error/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm" invalid>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" value="jane" />
  <FieldError>Please enter a valid email.</FieldError>
</Field>
