<!-- apps/cloudcn-docs/src/components/demo/SvelteButtonDemo.svelte -->
<script lang="ts">
  import { Button } from 'cloudcn-svelte';

  const VARIANTS = ['rounded', 'outline', 'success', 'danger', 'warn', 'info', 'primary', 'secondary'] as const;
  const SIZES = ['sm', 'md', 'lg', 'icon'] as const;
</script>

<div class="flex w-full flex-col gap-6">
  <div class="flex flex-wrap items-center gap-3">
    {#each VARIANTS as variant}
      <Button {variant}>{variant}</Button>
    {/each}
  </div>
  <div class="flex flex-wrap items-center gap-3">
    {#each SIZES as size}
      <Button {size}>{size}</Button>
    {/each}
  </div>
</div>
