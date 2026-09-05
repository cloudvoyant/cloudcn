<!-- libs/vortex-svelte/src/chat/ChatReactionsBar.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/reactions.tsx ChatReactionsBar. -->
<!-- Mirrored from vortex-react chat/reactions.tsx ChatReactionsBar. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { chatReactionsBarBase, cn, type ChatReactions } from '@cloudvoyant/vortex-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import ChatMessageReaction from './ChatMessageReaction.svelte';

  type Props = {
    reactions: ChatReactions;
    activeIcons?: string[];
    onToggle?: (icon: string) => void;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let { reactions, activeIcons = [], onToggle, class: className = '', ...rest }: Props = $props();

  const entries = $derived(Object.entries(reactions));
</script>

<Ark as="div" class={cn(chatReactionsBarBase, className)} {...rest}>
  {#each entries as [icon, count] (icon)}
    <ChatMessageReaction {icon} {count} active={activeIcons.includes(icon)} onToggle={() => onToggle?.(icon)} />
  {/each}
</Ark>
