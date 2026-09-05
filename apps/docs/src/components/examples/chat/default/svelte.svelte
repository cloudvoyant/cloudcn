<!-- apps/docs/src/components/examples/chat/default/svelte.svelte -->
<script lang="ts">
  import { Chat, ChatInput, ChatMessage, ChatThread } from '@cloudvoyant/vortex-svelte';
  import type { ChatAttachment } from '@cloudvoyant/vortex-ui';

  interface DemoMessage {
    id: string;
    from: string;
    content: string;
    attachments?: ChatAttachment[];
  }

  let messages = $state<DemoMessage[]>([{ id: 'm-1', from: 'Sam', content: 'Send me something!' }]);
</script>

<Chat class="h-72">
  <ChatThread>
    {#each messages as message (message.id)}
      <ChatMessage from={message.from} attachments={message.attachments}>
        {message.content}
      </ChatMessage>
    {/each}
  </ChatThread>
  <ChatInput
    placeholder="Say something…"
    onSend={(text, attachments) =>
      (messages = [
        ...messages,
        {
          id: `m-${String(messages.length + 1)}`,
          from: 'You',
          content: text === '' ? '(attachment)' : text,
          attachments,
        },
      ])}
  />
</Chat>
