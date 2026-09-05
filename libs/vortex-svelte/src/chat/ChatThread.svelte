<!-- libs/vortex-svelte/src/chat/ChatThread.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/thread.tsx. -->
<!-- Mirrored from vortex-react chat/thread.tsx: children or data mode, thread
     variants, onScrollTop, optional virtualization. A plain div is the scroll
     container (bind:this + onscroll are needed directly); @tanstack/svelte-virtual
     is an optional peer dependency loaded dynamically — the full list renders
     until it resolves. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import {
    chatThreadScrollBase,
    chatThreadVariants,
    cn,
    type ChatMessageData,
    type ChatThreadVariant,
  } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import ChatMessage from './ChatMessage.svelte';
  import { getChatContext, setChatContext } from './context';
  import VirtualList from './VirtualList.svelte';

  type Props = {
    variant?: ChatThreadVariant;
    messages?: ChatMessageData[];
    virtual?: boolean;
    estimateMessageSize?: () => number;
    onScrollTop?: () => void;
    /** Data-mode custom renderer (parametrized snippet). */
    message?: Snippet<[ChatMessageData]>;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    variant,
    messages,
    virtual = false,
    estimateMessageSize,
    onScrollTop,
    message,
    class: className = '',
    children,
    onscroll,
    ...rest
  }: Props = $props();

  const chatContext = getChatContext();
  const threadVariant = $derived(variant ?? chatContext?.threadVariant() ?? 'slack');

  setChatContext(() => threadVariant);

  let scrollEl: HTMLDivElement | undefined = $state(undefined);

  let virtualMod: typeof import('@tanstack/svelte-virtual') | null = $state(null);
  $effect(() => {
    if (!virtual || !messages) return;
    let cancelled = false;
    import('@tanstack/svelte-virtual')
      .then((mod) => {
        if (!cancelled) virtualMod = mod;
      })
      .catch(() => {
        // Optional peer dep missing — keep the non-virtual fallback.
        console.warn(
          'ChatThread: install @tanstack/svelte-virtual to enable `virtual` threads; rendering the full list instead.',
        );
      });
    return () => {
      cancelled = true;
    };
  });

  const scrollTopThreshold = 8;
  // Fires once per entry into the top zone, not on every scroll event inside it,
  // so the documented history-loading use case issues one fetch per gesture.
  let atTop = false;

  const handleScroll = () => {
    const nextAtTop = Boolean(scrollEl && scrollEl.scrollTop < scrollTopThreshold);
    if (nextAtTop && !atTop) onScrollTop?.();
    atTop = nextAtTop;
  };
</script>

<div
  bind:this={scrollEl}
  {...rest}
  onscroll={(event) => {
    // Composed rather than overridden: `onscroll` is part of the public div prop
    // surface, and a bare spread would drop onScrollTop.
    handleScroll();
    onscroll?.(event);
  }}
  class={cn(chatThreadScrollBase, className)}
>
  {#if messages}
    {#if virtualMod}
      <VirtualList
        createVirtualizer={virtualMod.createVirtualizer}
        {scrollEl}
        {messages}
        {estimateMessageSize}
        {threadVariant}
        {message}
      />
    {:else}
      <Ark as="div" class={cn(chatThreadVariants({ variant: threadVariant }))}>
        {#each messages as msg (msg.id)}
          {#if message}
            {@render message(msg)}
          {:else}
            <ChatMessage
              variant={msg.variant}
              status={msg.status ?? 'default'}
              from={msg.from}
              at={msg.at}
              reactions={msg.reactions}
              attachments={msg.attachments}
            >
              {msg.content}
            </ChatMessage>
          {/if}
        {/each}
      </Ark>
    {/if}
  {:else}
    <Ark as="div" class={cn(chatThreadVariants({ variant: threadVariant }))}>
      {@render children?.()}
    </Ark>
  {/if}
</div>
