<!-- apps/cloudcn-docs/src/components/examples/stack/vstack/svelte.svelte -->
<script lang="ts">
  import { Item, VStack } from 'cloudcn-svelte';
</script>

<VStack>
  <Item class="bg-primary/15">One</Item>
  <Item class="bg-secondary text-secondary-foreground">Two</Item>
  <Item class="bg-accent text-accent-foreground">Three</Item>
</VStack>
