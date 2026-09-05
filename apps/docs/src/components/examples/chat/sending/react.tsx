// apps/docs/src/components/examples/chat/sending/react.tsx
import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';

export default function ReactChatSending() {
  return (
    <Chat>
      <ChatThread>
        <ChatMessage variant="user" at={new Date('2026-09-04T09:50:00')}>
          Delivered earlier.
        </ChatMessage>
        <ChatMessage variant="user" status="sending" at={new Date('2026-09-04T09:50:05')}>
          This one is still sending…
        </ChatMessage>
        <ChatMessage variant="user" status="error" at={new Date('2026-09-04T09:50:10')}>
          And this one failed.
        </ChatMessage>
      </ChatThread>
    </Chat>
  );
}
