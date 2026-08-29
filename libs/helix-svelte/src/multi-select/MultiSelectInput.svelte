<!-- libs/helix-svelte/src/multi-select/MultiSelectInput.svelte -->
<script lang="ts">
  import { ComboboxInput, type ComboboxInputProps } from '@ark-ui/svelte/combobox';
  import { multiSelectInputBase, multiSelectInputVariants, cn } from '@cloudvoyant/helix';

  type Props = Omit<ComboboxInputProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', ...rest }: Props = $props();

  const classes = $derived(cn(multiSelectInputBase, multiSelectInputVariants({ size }), className));
</script>

<ComboboxInput class={classes} {...rest} />
