// apps/docs/src/components/examples/chat-message/reactions/react.tsx
import { useState } from 'react';
import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';
import type { ChatReactions } from '@cloudvoyant/vortex-ui';

export default function ReactChatMessageReactions() {
  const [reactions, setReactions] = useState<ChatReactions>({ '👍': 2, '🎉': 1 });
  const [active, setActive] = useState<string[]>([]);

  const toggle = (icon: string) => {
    const isActive = active.includes(icon);
    setReactions((counts) => ({ ...counts, [icon]: Math.max(0, (counts[icon] ?? 0) + (isActive ? -1 : 1)) }));
    setActive(isActive ? active.filter((i) => i !== icon) : [...active, icon]);
  };

  return (
    <Chat>
      <ChatThread>
        <ChatMessage
          from="Sam"
          at={new Date('2026-09-04T09:40:00')}
          reactions={reactions}
          activeReactionIcons={active}
          onReactionToggle={toggle}
        >
          The release shipped — reactions persist when you click them.
        </ChatMessage>
      </ChatThread>
    </Chat>
  );
}
