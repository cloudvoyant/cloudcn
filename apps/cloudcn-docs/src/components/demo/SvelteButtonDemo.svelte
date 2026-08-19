<!-- apps/cloudcn-docs/src/components/demo/SvelteButtonDemo.svelte -->
<script lang="ts">
  import { Button } from 'cloudcn-svelte';
  import { Plus, Download, Trash2, Check, AlertTriangle, Info as InfoIcon } from 'lucide-svelte';

  type Section = 'solid' | 'outline' | 'rounded' | 'sizes' | 'icon' | 'with-icon' | 'disabled';

  let { section }: { section: Section } = $props();

  const COLORS = [
    { name: 'Primary', color: 'primary' },
    { name: 'Secondary', color: 'secondary' },
    { name: 'Success', color: 'success' },
    { name: 'Danger', color: 'danger' },
    { name: 'Warn', color: 'warn' },
    { name: 'Info', color: 'info' },
  ] as const;
</script>

<div class="flex w-full flex-col gap-8">
  {#if section === 'solid'}
    <div class="flex flex-wrap items-center gap-3">
      {#each COLORS as { name, color }}
        <Button {color}>{name}</Button>
      {/each}
    </div>
  {:else if section === 'outline'}
    <div class="flex flex-wrap items-center gap-3">
      {#each COLORS as { name, color }}
        <Button variant="outline" {color}>{name}</Button>
      {/each}
    </div>
  {:else if section === 'rounded'}
    <div class="flex flex-wrap items-center gap-3">
      {#each COLORS as { name, color }}
        <Button {color} class="rounded-full">{name}</Button>
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
      <Button color="success"><Check class="size-4" />Approve</Button>
      <Button color="danger"><Trash2 class="size-4" />Delete</Button>
      <Button color="warn"><AlertTriangle class="size-4" />Warn</Button>
      <Button color="info"><InfoIcon class="size-4" />Info</Button>
      <Button><Plus class="size-4" />Add</Button>
      <Button color="secondary"><Download class="size-4" />Export</Button>
    </div>
  {:else}
    <div class="flex flex-wrap items-center gap-3">
      {#each COLORS as { name, color }}
        <Button {color} disabled>{name}</Button>
      {/each}
    </div>
  {/if}
</div>
