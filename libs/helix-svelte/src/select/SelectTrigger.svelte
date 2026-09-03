<!-- libs/helix-svelte/src/select/SelectTrigger.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { SelectTrigger, type SelectTriggerProps } from '@ark-ui/svelte/select';
  import { inputVariants, selectTriggerBase, cn } from '@cloudvoyant/helix';

  type Props = SelectTriggerProps & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(inputVariants({ size }), selectTriggerBase, className));
</script>

<SelectTrigger class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</SelectTrigger>
