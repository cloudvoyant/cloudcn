<!-- libs/helix-svelte/src/Textarea.svelte -->
<script lang="ts">
  import { FieldTextarea, type FieldTextareaProps } from '@ark-ui/svelte/field';
  import { textareaVariants, cn } from '@cloudvoyant/helix';

  type Props = Omit<FieldTextareaProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { size = 'md', class: className = '', children, value = $bindable(), ...rest }: Props = $props();

  const classes = $derived(cn(textareaVariants({ size }), className));
</script>

<FieldTextarea class={classes} bind:value {...rest}>
  {@render children?.()}
</FieldTextarea>
