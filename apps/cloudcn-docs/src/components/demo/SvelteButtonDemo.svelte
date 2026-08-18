<!-- apps/cloudcn-docs/src/components/demo/SvelteButtonDemo.svelte -->
<script lang="ts">
  import { Button } from 'cloudcn-svelte';
  import { Plus, Download, Trash2, Check, AlertTriangle, Info as InfoIcon } from 'lucide-svelte';

  type Section = 'solid' | 'outline' | 'rounded' | 'sizes' | 'icon' | 'with-icon' | 'disabled';

  let { section }: { section: Section } = $props();

  const SOLID = [
    { name: 'Primary', variant: 'primary' },
    { name: 'Secondary', variant: 'secondary' },
    { name: 'Success', variant: 'success' },
    { name: 'Danger', variant: 'danger' },
    { name: 'Warn', variant: 'warn' },
    { name: 'Info', variant: 'info' },
  ] as const;

  const OUTLINE = [
    { name: 'Primary', variant: 'outline-primary' },
    { name: 'Secondary', variant: 'outline-secondary' },
    { name: 'Success', variant: 'outline-success' },
    { name: 'Danger', variant: 'outline-danger' },
    { name: 'Warn', variant: 'outline-warn' },
    { name: 'Info', variant: 'outline-info' },
  ] as const;
</script>

<div class="flex w-full flex-col gap-8">
  {#if section === 'solid'}
    <div class="flex flex-wrap items-center gap-3">
      {#each SOLID as { name, variant }}
        <Button {variant}>{name}</Button>
      {/each}
    </div>
  {:else if section === 'outline'}
    <div class="flex flex-wrap items-center gap-3">
      {#each OUTLINE as { name, variant }}
        <Button {variant}>{name}</Button>
      {/each}
    </div>
  {:else if section === 'rounded'}
    <div class="flex flex-wrap items-center gap-3">
      {#each SOLID as { name, variant }}
        <Button {variant} class="rounded-full">{name}</Button>
      {/each}
    </div>
  {:else if section === 'sizes'}
    <div class="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  {:else if section === 'icon'}
    <div class="flex flex-wrap items-center gap-3">
      <Button size="icon" class="rounded-full" aria-label="Add"><Plus class="size-4" /></Button>
      <Button size="icon" variant="outline" aria-label="Add"><Plus class="size-4" /></Button>
    </div>
  {:else if section === 'with-icon'}
    <div class="flex flex-wrap items-center gap-3">
      <Button variant="success"><Check class="size-4" />Approve</Button>
      <Button variant="danger"><Trash2 class="size-4" />Delete</Button>
      <Button variant="warn"><AlertTriangle class="size-4" />Warn</Button>
      <Button variant="info"><InfoIcon class="size-4" />Info</Button>
      <Button><Plus class="size-4" />Add</Button>
      <Button variant="secondary"><Download class="size-4" />Export</Button>
    </div>
  {:else}
    <div class="flex flex-wrap items-center gap-3">
      {#each SOLID as { name, variant }}
        <Button {variant} disabled>{name}</Button>
      {/each}
    </div>
  {/if}
</div>
