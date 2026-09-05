<!-- libs/vortex-svelte/src/chat/VirtualList.svelte -->
<!-- Closely based on: @tanstack/svelte-virtual + @ark-ui/svelte/factory (Ark UI),
     mirrored from @cloudvoyant/vortex-react chat/thread.tsx VirtualRows. -->
<!-- Virtualized rows for ChatThread backed by @tanstack/svelte-virtual. The
     createVirtualizer factory is injected as a prop because the module is an
     optional peer dependency loaded dynamically by ChatThread. Rows bind by
     index and are measured in an $effect (the Ark factory does not forward
     element refs). Mirrors vortex-react chat/thread.tsx VirtualRows. -->
<script lang="ts">
  import {
    chatThreadVariants,
    chatThreadVirtualRowVariants,
    cn,
    type ChatMessageData,
    type ChatThreadVariant,
  } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type * as SvelteVirtual from '@tanstack/svelte-virtual';
  import ChatMessage from './ChatMessage.svelte';

  type Props = {
    createVirtualizer: typeof SvelteVirtual.createVirtualizer;
    scrollEl: HTMLDivElement | undefined;
    messages: ChatMessageData[];
    estimateMessageSize?: () => number;
    /** Thread variant — supplies the padding/gap the non-virtual branch gets from cva. */
    threadVariant?: ChatThreadVariant;
    message?: Snippet<[ChatMessageData]>;
  };

  let {
    createVirtualizer,
    scrollEl,
    messages,
    estimateMessageSize,
    threadVariant = 'slack',
    message,
  }: Props = $props();

  // Built once, at init. Constructing it inside $derived would rebuild the
  // virtualizer (and drop its measurement cache) on every appended message, so
  // each row would fall back to the estimate and the scroll position would jump.
  // The init-time reads below are deliberate: `count` is pushed reactively through
  // setOptions (see the effect after this), and the factory/estimate are static
  // configuration that never changes for a mounted thread.
  // svelte-ignore state_referenced_locally
  const virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
    // svelte-ignore state_referenced_locally
    count: messages.length,
    getScrollElement: () => scrollEl ?? null,
    // svelte-ignore state_referenced_locally
    estimateSize: estimateMessageSize ?? (() => 72),
    overscan: 6,
  });

  // Count changes go through setOptions — svelte-virtual exposes it precisely so a
  // new count that doesn't shift the visible range still re-renders. The guard
  // keeps this effect's own store notification from re-triggering it.
  // svelte-ignore state_referenced_locally
  let lastCount = messages.length;
  $effect(() => {
    if (lastCount === messages.length) return;
    lastCount = messages.length;
    $virtualizer.setOptions({ count: messages.length });
  });

  const items = $derived($virtualizer.getVirtualItems());
  const totalSize = $derived($virtualizer.getTotalSize());

  let rowEls = $state<(HTMLDivElement | undefined)[]>([]);

  $effect(() => {
    for (const el of rowEls) {
      if (el) $virtualizer.measureElement(el);
    }
  });
</script>

<!-- The variant wrapper carries the thread padding; the sized element below stays
     unpadded so its height matches getTotalSize(), and each absolute row carries
     the variant's gap as bottom padding (flex gap cannot space absolute children). -->
<div class={cn(chatThreadVariants({ variant: threadVariant }))}>
  <div style="height: {totalSize}px; position: relative; width: 100%;">
    {#each items as item (item.key)}
      {@const msg = messages[item.index]}
      <div
        data-index={item.index}
        bind:this={rowEls[item.index]}
        class={chatThreadVirtualRowVariants({ variant: threadVariant })}
        style="position: absolute; top: 0; left: 0; width: 100%; transform: translateY({item.start}px);"
      >
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
      </div>
    {/each}
  </div>
</div>
