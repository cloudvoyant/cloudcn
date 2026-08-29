<!-- libs/helix-svelte/src/field/FieldHint.svelte -->
<script lang="ts">
  import { FieldHelperText, type FieldHelperTextProps } from '@ark-ui/svelte/field';
  import { fieldHintBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldHelperTextProps = $props();

  const classes = $derived(cn(fieldHintBase, className));
</script>

<FieldHelperText class={classes} {...rest}>
  {@render children?.()}
</FieldHelperText>
