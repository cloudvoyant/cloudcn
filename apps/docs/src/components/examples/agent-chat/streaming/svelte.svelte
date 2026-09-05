<!-- apps/docs/src/components/examples/agent-chat/streaming/svelte.svelte -->
<script lang="ts">
  import { onDestroy } from 'svelte';
  import { AgentChat, AgentStreamingMessage, ChatInput, ChatThread, useAgenticChat } from '@cloudvoyant/vortex-svelte';

  const LOREM_LINES = [
    'Streaming is fun.',
    'Tokens arrive one by one.',
    'The caret blinks while it goes.',
    'Settled text joins the history.',
    'Done — send another message!',
  ];

  const chat = useAgenticChat();
  let timer: ReturnType<typeof setInterval> | null = null;

  onDestroy(() => {
    if (timer !== null) clearInterval(timer);
  });

  const handleSend = (text: string) => {
    // A second send mid-stream would otherwise orphan the first interval, leaving
    // two loops dispatching text-delta into the same streamingText.
    if (timer !== null) clearInterval(timer);
    timer = null;
    chat.addMessage({
      id: `user-${String(chat.state.messages.length)}`,
      variant: 'user',
      content: text,
      at: new Date(),
    });
    chat.setStatus('waiting');
    let index = 0;
    timer = setInterval(() => {
      const line = LOREM_LINES[index];
      index += 1;
      if (line === undefined) {
        if (timer !== null) clearInterval(timer);
        timer = null;
        chat.dispatch({
          type: 'done',
          message: {
            id: `agent-${String(Date.now())}`,
            variant: 'agent',
            content: LOREM_LINES.join('\n'),
            at: new Date(),
          },
        });
        return;
      }
      chat.dispatch({ type: 'text-delta', text: (index === 1 ? '' : '\n') + line });
    }, 600);
  };
</script>

<AgentChat {chat} class="h-80">
  <ChatThread messages={chat.state.messages} virtual />
  <AgentStreamingMessage />
  <ChatInput placeholder="Ask the agent…" onSend={handleSend} />
</AgentChat>
