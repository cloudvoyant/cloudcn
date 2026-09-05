<!-- apps/docs/src/components/examples/chat-message/default/svelte.svelte -->
<script lang="ts">
  import { Chat, ChatMessage, ChatThread } from '@cloudvoyant/vortex-svelte';
</script>

<Chat>
  <ChatThread>
    <ChatMessage from="Sam" at={new Date('2026-09-04T09:30:00')}>
      Hey! How is the chat component going?
    </ChatMessage>
  </ChatThread>
</Chat>
