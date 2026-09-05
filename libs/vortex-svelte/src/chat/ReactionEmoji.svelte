<!-- libs/vortex-svelte/src/chat/ReactionEmoji.svelte -->
<!-- Closely based on: @ark-ui/svelte/popover (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/reactions.tsx ReactionEmoji. -->
<!-- Mirrored from vortex-react chat/reactions.tsx ReactionEmoji: controlled
     Ark popover with an emoji grid. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import {
    chatReactionBase,
    chatReactionMenuButtonBase,
    chatReactionMenuGridBase,
    cn,
    DEFAULT_REACTION_EMOJIS,
  } from '@cloudvoyant/vortex-ui';
  import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '../popover';

  type Props = {
    emojis?: string[];
    onSelect: (emoji: string) => void;
    triggerLabel?: string;
    class?: string;
  };

  let {
    emojis = DEFAULT_REACTION_EMOJIS,
    onSelect,
    triggerLabel = 'Add emoji reaction',
    class: className = '',
  }: Props = $props();

  let open = $state(false);
</script>

<Popover {open} onOpenChange={(details) => (open = details.open)}>
  <PopoverTrigger aria-label={triggerLabel} class={cn(chatReactionBase, className)}>
    <span aria-hidden="true">😊</span>
    <span aria-hidden="true">+</span>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle class="sr-only">Emoji reactions</PopoverTitle>
    <Ark as="div" class={chatReactionMenuGridBase}>
      {#each emojis as emoji (emoji)}
        <Ark
          as="button"
          type="button"
          aria-label={`React with ${emoji}`}
          class={chatReactionMenuButtonBase}
          onclick={() => {
            onSelect(emoji);
            open = false;
          }}
        >
          {emoji}
        </Ark>
      {/each}
    </Ark>
  </PopoverContent>
</Popover>
