// apps/docs/src/components/examples/chat-message/reaction-menus/react.tsx
import { useState } from 'react';
import { Chat, ChatMessage, ChatThread, ReactionEmoji, ReactionRate } from '@cloudvoyant/vortex-react';

export default function ReactChatMessageReactionMenus() {
  const [reactions, setReactions] = useState<Record<string, number>>({});
  const [rating, setRating] = useState<'thumbs-up' | 'thumbs-down' | null>(null);

  return (
    <Chat>
      <ChatThread>
        <ChatMessage variant="agent" from="Qwen" at={new Date('2026-09-04T09:45:00')} reactions={reactions}>
          Pick an emoji reaction or rate this answer.
        </ChatMessage>
        <div className="flex items-center gap-2 pl-1">
          <ReactionEmoji onSelect={(emoji) => setReactions((prev) => ({ ...prev, [emoji]: (prev[emoji] ?? 0) + 1 }))} />
          <ReactionRate
            value={rating}
            onToggle={(icon) => {
              const wasActive = rating === icon;
              setRating(wasActive ? null : icon);
              setReactions((prev) => ({ ...prev, [icon]: (prev[icon] ?? 0) + (wasActive ? -1 : 1) }));
            }}
          />
        </div>
      </ChatThread>
    </Chat>
  );
}
