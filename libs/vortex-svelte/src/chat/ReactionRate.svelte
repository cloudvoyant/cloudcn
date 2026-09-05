<!-- libs/vortex-svelte/src/chat/ReactionRate.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/reactions.tsx ReactionRate. -->
<!-- Mirrored from vortex-react chat/reactions.tsx ReactionRate. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { chatReactionRateBase, cn } from '@cloudvoyant/vortex-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import ChatMessageReaction from './ChatMessageReaction.svelte';

  type Props = {
    value?: 'thumbs-up' | 'thumbs-down' | null;
    counts?: { up: number; down: number };
    onToggle: (icon: 'thumbs-up' | 'thumbs-down') => void;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let { value = null, counts = { up: 0, down: 0 }, onToggle, class: className = '', ...rest }: Props = $props();
</script>

<Ark as="div" role="group" aria-label="Rate this message" class={cn(chatReactionRateBase, className)} {...rest}>
  <ChatMessageReaction
    icon="thumbs-up"
    count={counts.up}
    active={value === 'thumbs-up'}
    onToggle={() => onToggle('thumbs-up')}
  />
  <ChatMessageReaction
    icon="thumbs-down"
    count={counts.down}
    active={value === 'thumbs-down'}
    onToggle={() => onToggle('thumbs-down')}
  />
</Ark>
