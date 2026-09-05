// apps/docs/src/components/examples/chat-message/variants/react.tsx
import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';

export default function ReactChatMessageVariants() {
  return (
    <Chat>
      <ChatThread>
        <ChatMessage variant="user" from="You" at={new Date('2026-09-04T09:31:00')}>
          What do the variants look like?
        </ChatMessage>
        <ChatMessage variant="default" from="Sam" at={new Date('2026-09-04T09:31:30')}>
          Default is everyone else's messages.
        </ChatMessage>
        <ChatMessage variant="agent" from="Qwen" at={new Date('2026-09-04T09:32:00')}>
          Agent messages will carry rich content.
        </ChatMessage>
      </ChatThread>
    </Chat>
  );
}
