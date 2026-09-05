// apps/docs/src/components/examples/chat/default/react.tsx
import { useState } from 'react';
import { Chat, ChatInput, ChatMessage, ChatThread } from '@cloudvoyant/vortex-react';
import type { ChatAttachment } from '@cloudvoyant/vortex-ui';

interface DemoMessage {
  id: string;
  from: string;
  content: string;
  attachments?: ChatAttachment[];
}

export default function ReactChatDefault() {
  const [messages, setMessages] = useState<DemoMessage[]>([{ id: 'm-1', from: 'Sam', content: 'Send me something!' }]);

  return (
    <Chat className="h-72">
      <ChatThread>
        {messages.map((message) => (
          <ChatMessage key={message.id} from={message.from} attachments={message.attachments}>
            {message.content}
          </ChatMessage>
        ))}
      </ChatThread>
      <ChatInput
        placeholder="Say something…"
        onSend={(text, attachments) =>
          setMessages((prev) => [
            ...prev,
            {
              id: `m-${String(prev.length + 1)}`,
              from: 'You',
              content: text === '' ? '(attachment)' : text,
              attachments,
            },
          ])
        }
      />
    </Chat>
  );
}
