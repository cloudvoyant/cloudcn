<!-- apps/cloudcn-docs/src/components/examples/stack/responsive-direction/svelte.svelte -->
<script lang="ts">
  import { Item, Stack } from 'cloudcn-svelte';
</script>

<Stack class="md:flex-row">
  <Item class="flex-1 bg-primary/15">One</Item>
  <Item class="flex-1 bg-secondary text-secondary-foreground">Two</Item>
  <Item class="flex-1 bg-accent text-accent-foreground">Three</Item>
</Stack>
