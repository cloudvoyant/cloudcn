// apps/docs/src/components/examples/chat/typing/react.tsx
import { Chat, ChatMessage, ChatThread, TypingIndicator } from '@cloudvoyant/vortex-react';

export default function ReactChatTyping() {
  return (
    <Chat>
      <ChatThread>
        <ChatMessage from="Sam">What's taking so long?</ChatMessage>
        <TypingIndicator label="Sam is typing" />
      </ChatThread>
    </Chat>
  );
}
