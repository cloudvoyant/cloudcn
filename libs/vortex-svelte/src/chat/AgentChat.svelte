<!-- libs/vortex-svelte/src/chat/AgentChat.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react agent-chat.tsx AgentChat. -->
<!-- Mirrored from vortex-react agent-chat.tsx AgentChat: provides the agent
     api context and the thread-variant chat context. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { chatRootBase, cn, type ChatThreadVariant } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { setAgentChatContext } from './agent-context';
  import { setChatContext } from './context';
  import type { AgenticChatApi } from './use-agentic-chat.svelte';

  type Props = {
    chat: AgenticChatApi;
    threadVariant?: ChatThreadVariant;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { chat, threadVariant = 'minimal', class: className = '', children, ...rest }: Props = $props();

  setChatContext(() => threadVariant);
  // A getter, not the object: capturing `chat` once here would leave the context
  // pointing at a superseded api instance if the prop is replaced.
  setAgentChatContext(() => chat);
</script>

<Ark as="div" class={cn(chatRootBase, className)} {...rest}>
  {@render children?.()}
</Ark>
