<!-- libs/helix-svelte/src/Input.svelte -->
<!-- Closely based on: Shark UI input (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldInput, type FieldInputProps } from '@ark-ui/svelte/field';
  import { inputVariants, cn } from '@cloudvoyant/helix';

  type Props = Omit<FieldInputProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'ghost';
    class?: string;
  };

  let { size = 'md', variant = 'default', class: className = '', value = $bindable(), ...rest }: Props = $props();

  const classes = $derived(cn(inputVariants({ size, variant }), className));
</script>

<FieldInput class={classes} bind:value {...rest} />
