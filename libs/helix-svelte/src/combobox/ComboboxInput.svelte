<!-- libs/helix-svelte/src/combobox/ComboboxInput.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxInput, type ComboboxInputProps } from '@ark-ui/svelte/combobox';
  import { inputVariants, comboboxInputBase, cn } from '@cloudvoyant/helix';

  type Props = Omit<ComboboxInputProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', ...rest }: Props = $props();

  const classes = $derived(cn(inputVariants({ size }), comboboxInputBase, className));
</script>

<ComboboxInput class={classes} {...rest} />
