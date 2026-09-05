<!-- apps/docs/src/components/examples/chat/typing/svelte.svelte -->
<script lang="ts">
  import { Chat, ChatMessage, ChatThread, TypingIndicator } from '@cloudvoyant/vortex-svelte';
</script>

<Chat>
  <ChatThread>
    <ChatMessage from="Sam">What's taking so long?</ChatMessage>
    <TypingIndicator label="Sam is typing" />
  </ChatThread>
</Chat>
