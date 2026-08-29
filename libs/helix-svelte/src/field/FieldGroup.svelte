<!-- libs/helix-svelte/src/field/FieldGroup.svelte -->
<script lang="ts">
  import { FieldsetRoot, type FieldsetRootProps } from '@ark-ui/svelte/fieldset';
  import { fieldGroupRootBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FieldsetRootProps = $props();
  const classes = $derived(cn(fieldGroupRootBase, className));
</script>

<FieldsetRoot class={classes} {...rest}>{@render children?.()}</FieldsetRoot>
