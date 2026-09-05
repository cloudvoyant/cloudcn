<!-- apps/docs/src/components/examples/chat-message/reaction-menus/svelte.svelte -->
<script lang="ts">
  import { Chat, ChatMessage, ChatThread, ReactionEmoji, ReactionRate } from '@cloudvoyant/vortex-svelte';

  let reactions = $state<Record<string, number>>({});
  let rating = $state<'thumbs-up' | 'thumbs-down' | null>(null);
</script>

<Chat>
  <ChatThread>
    <ChatMessage variant="agent" from="Qwen" at={new Date('2026-09-04T09:45:00')} {reactions}>
      Pick an emoji reaction or rate this answer.
    </ChatMessage>
    <div class="flex items-center gap-2 pl-1">
      <ReactionEmoji onSelect={(emoji) => (reactions = { ...reactions, [emoji]: (reactions[emoji] ?? 0) + 1 })} />
      <ReactionRate
        value={rating}
        onToggle={(icon) => {
          const wasActive = rating === icon;
          rating = wasActive ? null : icon;
          reactions = { ...reactions, [icon]: (reactions[icon] ?? 0) + (wasActive ? -1 : 1) };
        }}
      />
    </div>
  </ChatThread>
</Chat>
