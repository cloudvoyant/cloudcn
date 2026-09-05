// apps/docs/src/components/examples/chat/ios/react.tsx
import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';

export default function ReactChatIos() {
  return (
    <Chat variant="ios" className="h-72">
      <ChatThread>
        <ChatMessage from="Sam" at={new Date('2026-09-04T09:50:00')}>
          Are we still on for tonight?
        </ChatMessage>
        <ChatMessage variant="user" at={new Date('2026-09-04T09:50:30')}>
          Yes — leaving in ten.
        </ChatMessage>
        <ChatMessage from="Sam" at={new Date('2026-09-04T09:51:00')}>
          Perfect. I'll send the address.
        </ChatMessage>
        <ChatMessage variant="user" status="sending" at={new Date('2026-09-04T09:51:20')}>
          This one is still on its way…
        </ChatMessage>
      </ChatThread>
    </Chat>
  );
}
