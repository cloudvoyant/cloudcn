<!-- libs/helix-svelte/src/Input.svelte -->
<!-- Closely based on: Shark UI input (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldInput, type FieldInputProps } from '@ark-ui/svelte/field';
  import { inputVariants, cn } from '@cloudvoyant/helix';

  type Props = Omit<FieldInputProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', value = $bindable(), ...rest }: Props = $props();

  const classes = $derived(cn(inputVariants({ size }), className));
</script>

<FieldInput class={classes} bind:value {...rest} />
