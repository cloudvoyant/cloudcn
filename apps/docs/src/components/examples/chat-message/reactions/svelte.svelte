<!-- apps/docs/src/components/examples/chat-message/reactions/svelte.svelte -->
<script lang="ts">
  import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-svelte';
  import type { ChatReactions } from '@cloudvoyant/vortex-ui';

  let reactions = $state<ChatReactions>({ '👍': 2, '🎉': 1 });
  let active = $state<string[]>([]);

  const toggle = (icon: string) => {
    const isActive = active.includes(icon);
    reactions = { ...reactions, [icon]: Math.max(0, (reactions[icon] ?? 0) + (isActive ? -1 : 1)) };
    active = isActive ? active.filter((i) => i !== icon) : [...active, icon];
  };
</script>

<Chat>
  <ChatThread>
    <ChatMessage
      from="Sam"
      at={new Date('2026-09-04T09:40:00')}
      {reactions}
      activeReactionIcons={active}
      onReactionToggle={toggle}
    >
      The release shipped — reactions persist when you click them.
    </ChatMessage>
  </ChatThread>
</Chat>
