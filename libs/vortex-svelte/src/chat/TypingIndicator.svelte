<!-- libs/vortex-svelte/src/chat/TypingIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/typing.tsx. -->
<!-- Mirrored from vortex-react chat/typing.tsx. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { cn, typingDotBase, typingDotDelays, typingIndicatorBase } from '@cloudvoyant/vortex-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = { label?: string; class?: string } & HTMLAttributes<HTMLDivElement>;

  let { label = 'Someone is typing', class: className = '', ...rest }: Props = $props();
</script>

<Ark as="div" role="status" aria-label={label} class={cn(typingIndicatorBase, className)} {...rest}>
  {#each typingDotDelays as delay (delay)}
    <Ark as="span" aria-hidden="true" class={typingDotBase} style="animation-delay: {delay}ms"></Ark>
  {/each}
</Ark>
