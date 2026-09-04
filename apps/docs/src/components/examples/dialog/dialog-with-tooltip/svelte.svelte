<!-- apps/docs/src/components/examples/dialog/dialog-with-tooltip/svelte.svelte -->
<script lang="ts">
  import { Dialog, DialogTitle, DialogDescription, DialogContent, DialogBackdrop } from '@cloudvoyant/vortex-svelte';
  import { Tooltip, TooltipTrigger, TooltipContent } from '@cloudvoyant/vortex-svelte';

  let open = $state(false);
</script>

<div class="flex flex-col items-center gap-4">
  <Tooltip>
    <TooltipTrigger>
      {#snippet asChild(propsFn)}
        <button
          {...propsFn()}
          type="button"
          class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
          onclick={() => (open = true)}
        >
          Open Dialog
        </button>
      {/snippet}
    </TooltipTrigger>
    <TooltipContent>Shows on hover over the trigger</TooltipContent>
  </Tooltip>
  <Dialog bind:open>
    <DialogBackdrop />
    <DialogContent>
      <DialogTitle>Dialog with Tooltip</DialogTitle>
      <DialogDescription>The trigger also shows a tooltip on hover.</DialogDescription>
    </DialogContent>
  </Dialog>
</div>
