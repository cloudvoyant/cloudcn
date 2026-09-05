// apps/docs/src/components/examples/chat-message/default/react.tsx
import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';

export default function ReactChatMessageDefault() {
  return (
    <Chat>
      <ChatThread>
        <ChatMessage from="Sam" at={new Date('2026-09-04T09:30:00')}>
          Hey! How is the chat component going?
        </ChatMessage>
      </ChatThread>
    </Chat>
  );
}
