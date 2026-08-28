<!-- libs/helix-svelte/src/field/FieldGroupError.svelte -->
<script lang="ts">
  import { FieldsetErrorText, type FieldsetErrorTextProps } from '@ark-ui/svelte/fieldset';
  import { fieldGroupErrorBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FieldsetErrorTextProps = $props();
  const classes = $derived(cn(fieldGroupErrorBase, className));
</script>

<FieldsetErrorText class={classes} {...rest}>{@render children?.()}</FieldsetErrorText>
