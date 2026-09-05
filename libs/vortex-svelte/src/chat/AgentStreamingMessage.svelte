<!-- libs/vortex-svelte/src/chat/AgentStreamingMessage.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react agent-chat.tsx AgentStreamingMessage. -->
<!-- Mirrored from vortex-react agent-chat.tsx AgentStreamingMessage. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getAgentChatContext } from './agent-context';
  import ChatMessage from './ChatMessage.svelte';

  type Props = { text?: string; streaming?: boolean; class?: string } & HTMLAttributes<HTMLDivElement>;

  let { text, streaming, class: className, ...rest }: Props = $props();

  const chat = getAgentChatContext();
  const api = $derived(chat?.()?.state);
  const content = $derived(text ?? api?.streamingText ?? '');
  const isStreaming = $derived(
    streaming ?? (api ? api.status === 'streaming' || api.status === 'waiting' || api.status === 'retrying' : false),
  );
</script>

<!-- The live region stays mounted even while empty: an aria-live node must be in
     the DOM before its content changes, or the first announcement of every stream
     is dropped. aria-busy marks the region as still updating while tokens arrive. -->
<Ark as="div" aria-live="polite" aria-busy={isStreaming} data-agent-streaming class={className} {...rest}>
  {#if content !== ''}
    <ChatMessage variant="agent" status={isStreaming ? 'streaming' : 'default'}>{content}</ChatMessage>
  {/if}
</Ark>
