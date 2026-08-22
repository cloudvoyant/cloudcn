<!-- apps/cloudcn-docs/src/components/examples/stack/hstack/svelte.svelte -->
<script lang="ts">
  import { Item, HStack } from 'cloudcn-svelte';
</script>

<HStack>
  <Item class="flex-1 bg-primary/15">One</Item>
  <Item class="flex-1 bg-secondary text-secondary-foreground">Two</Item>
  <Item class="flex-1 bg-accent text-accent-foreground">Three</Item>
</HStack>
