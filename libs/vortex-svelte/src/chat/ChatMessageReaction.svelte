<!-- libs/vortex-svelte/src/chat/ChatMessageReaction.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/reactions.tsx ChatMessageReaction. -->
<!-- Mirrored from vortex-react chat/reactions.tsx ChatMessageReaction. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { chatReactionActiveBase, chatReactionBase, cn } from '@cloudvoyant/vortex-ui';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ThumbsDownIcon, ThumbsUpIcon } from './icons';

  type Props = {
    icon: string;
    count: number;
    active?: boolean;
    onToggle?: () => void;
    class?: string;
  } & HTMLButtonAttributes;

  let { icon, count, active = false, onToggle, class: className = '', ...rest }: Props = $props();

  const isThumbsUp = $derived(icon === 'thumbs-up');
  const isThumbsDown = $derived(icon === 'thumbs-down');
  const classes = $derived(cn(chatReactionBase, active && chatReactionActiveBase, className));
</script>

<Ark
  as="button"
  type="button"
  aria-pressed={active}
  aria-label={isThumbsUp ? 'Thumbs up' : isThumbsDown ? 'Thumbs down' : `React with ${icon}`}
  onclick={() => onToggle?.()}
  class={classes}
  {...rest}
>
  {#if isThumbsUp}
    <ThumbsUpIcon class="size-3.5" />
  {:else if isThumbsDown}
    <ThumbsDownIcon class="size-3.5" />
  {:else}
    <span aria-hidden="true">{icon}</span>
  {/if}
  <span>{count}</span>
</Ark>
