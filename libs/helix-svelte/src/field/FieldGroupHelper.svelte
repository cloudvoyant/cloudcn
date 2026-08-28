<!-- libs/helix-svelte/src/field/FieldGroupHelper.svelte -->
<script lang="ts">
  import { FieldsetHelperText, type FieldsetHelperTextProps } from '@ark-ui/svelte/fieldset';
  import { fieldGroupHelperBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FieldsetHelperTextProps = $props();
  const classes = $derived(cn(fieldGroupHelperBase, className));
</script>

<FieldsetHelperText class={classes} {...rest}>{@render children?.()}</FieldsetHelperText>
