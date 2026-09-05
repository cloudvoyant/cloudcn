<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/message.tsx. -->
<!-- Mirrored from vortex-react chat/message.tsx: role variants, meta row,
     streaming caret, sending/error statuses, attachments, reactions. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import {
    chatMessageAttachmentsBase,
    chatMessageBodyBase,
    chatMessageBubbleVariants,
    chatMessageMetaBase,
    chatMessageVariants,
    chatStreamingCaretBase,
    cn,
    type ChatAttachment,
    type ChatMessageStatus,
    type ChatMessageVariant,
    type ChatReactions,
  } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import ChatReactionsBar from './ChatReactionsBar.svelte';
  import { getChatContext } from './context';

  type Props = {
    variant?: ChatMessageVariant;
    status?: ChatMessageStatus;
    from?: string;
    at?: Date;
    reactions?: ChatReactions;
    activeReactionIcons?: string[];
    attachments?: ChatAttachment[];
    onReactionToggle?: (icon: string) => void;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    variant = 'default',
    status = 'default',
    from,
    at,
    reactions,
    activeReactionIcons = [],
    attachments,
    onReactionToggle,
    class: className = '',
    children,
    ...rest
  }: Props = $props();

  const chatContext = getChatContext();
  const threadVariant = $derived(chatContext?.threadVariant() ?? 'slack');
  const align = $derived(threadVariant === 'ios' && variant === 'user' ? 'right' : 'left');
  const minimal = $derived(threadVariant === 'minimal');
  const meta = $derived(
    from && !minimal
      ? at
        ? `${from} · ${at.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
        : from
      : '',
  );
  const classes = $derived(cn(chatMessageVariants({ align }), className));
  const bubbleClasses = $derived(
    cn(chatMessageBubbleVariants({ variant: minimal ? 'agent' : variant }), minimal && 'bg-transparent px-0 py-0'),
  );
</script>

// libs/vortex-svelte/src/chat/ChatMessage.svelte

<Ark as="div" data-variant={variant} data-status={status} class={classes} {...rest}>
  <Ark as="div" class={chatMessageBodyBase}>
    {#if meta}
      <Ark as="span" class={chatMessageMetaBase}>{meta}</Ark>
    {/if}
    <Ark as="div" class={bubbleClasses}>
      {@render children?.()}
      {#if status === 'streaming'}
        <Ark as="span" aria-hidden="true" class={chatStreamingCaretBase}></Ark>
      {/if}
    </Ark>
    {#if status === 'sending'}
      <Ark as="span" class={chatMessageMetaBase}>Sending…</Ark>
    {/if}
    {#if status === 'error'}
      <Ark as="span" role="status" class="text-xs text-destructive">Failed to send</Ark>
    {/if}
    {#if attachments && attachments.length > 0}
      <Ark as="ul" class={chatMessageAttachmentsBase}>
        {#each attachments as attachment (attachment.id)}
          <Ark as="li">
            {#if attachment.url}
              <Ark as="a" href={attachment.url}>{attachment.name}</Ark>
            {:else}
              {attachment.name}
            {/if}
          </Ark>
        {/each}
      </Ark>
    {/if}
    {#if reactions}
      <ChatReactionsBar {reactions} activeIcons={activeReactionIcons} onToggle={onReactionToggle} />
    {/if}
  </Ark>
</Ark>
