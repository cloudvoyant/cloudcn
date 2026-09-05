<!-- libs/vortex-svelte/src/chat/Chat.svelte -->
<!-- Closely based on: @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/root.tsx. -->
<!-- Mirrored from vortex-react chat/root.tsx. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { chatRootBase, cn, type ChatVariant } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { setChatContext } from './context';

  type Props = { variant?: ChatVariant; class?: string; children?: Snippet } & HTMLAttributes<HTMLDivElement>;

  let { variant = 'slack', class: className = '', children, ...rest }: Props = $props();

  setChatContext(() => variant);
</script>

<Ark as="div" class={cn(chatRootBase, className)} {...rest}>
  {@render children?.()}
</Ark>
