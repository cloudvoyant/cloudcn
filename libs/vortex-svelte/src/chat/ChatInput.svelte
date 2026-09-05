<!-- libs/vortex-svelte/src/chat/ChatInput.svelte -->
<!-- Closely based on: Shark UI textarea (@ark-ui/svelte/field) via the sourced
     Textarea wrapper + @ark-ui/svelte/factory (Ark UI), mirrored from
     @cloudvoyant/vortex-react chat/input.tsx. -->
<!-- Mirrored from vortex-react chat/input.tsx: composer with attachment
     picker, chips, and send button. Enter sends; Shift+Enter inserts a
     newline. Controlled via value/onValueChange or uncontrolled. -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import {
    chatInputAttachmentBase,
    chatInputAttachmentDeleteBase,
    chatInputAttachmentsBase,
    chatInputBase,
    chatInputRowBase,
    chatInputTriggerBase,
    cn,
    type ChatAttachment,
  } from '@cloudvoyant/vortex-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import Button from '../Button.svelte';
  import Textarea from '../Textarea.svelte';
  import { PaperclipIcon, SendIcon, XIcon } from './icons';

  type Props = {
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    /** Fires with the trimmed text and any picked attachments, then clears both.
     *  Blob URLs in the attachments transfer to the caller — revoke them there. */
    onSend?: (text: string, attachments: ChatAttachment[]) => void;
    disabled?: boolean;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    placeholder = 'Type a message…',
    value,
    onValueChange,
    onSend,
    disabled = false,
    class: className = '',
    ...rest
  }: Props = $props();

  let internal = $state('');
  let attachments = $state<ChatAttachment[]>([]);
  let fileEl: HTMLInputElement | undefined = $state(undefined);
  let attachmentSeq = 0;

  const text = $derived(value ?? internal);

  const setText = (next: string) => {
    if (onValueChange) onValueChange(next);
    else internal = next;
  };

  const send = () => {
    const trimmed = text.trim();
    if (disabled || (trimmed === '' && attachments.length === 0)) return;
    onSend?.(trimmed, attachments);
    setText('');
    attachments = [];
  };

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    attachments = [
      ...attachments,
      ...Array.from(files).map((file) => ({
        id: `attachment-${String(++attachmentSeq)}`,
        name: file.name,
        url: URL.createObjectURL(file),
      })),
    ];
  };
  const removeAttachment = (attachment: ChatAttachment) => {
    // The chip was the only holder of this blob URL; without revoking it the
    // File leaks for the page lifetime.
    if (attachment.url) URL.revokeObjectURL(attachment.url);
    attachments = attachments.filter((a) => a.id !== attachment.id);
  };
</script>

<Ark as="div" class={cn(chatInputBase, className)} {...rest}>
  {#if attachments.length > 0}
    <Ark as="ul" class={chatInputAttachmentsBase}>
      {#each attachments as attachment (attachment.id)}
        <Ark as="li" class={chatInputAttachmentBase}>
          <span>{attachment.name}</span>
          <Ark
            as="button"
            type="button"
            aria-label={`Remove ${attachment.name}`}
            class={chatInputAttachmentDeleteBase}
            onclick={() => removeAttachment(attachment)}
          >
            <XIcon class="size-3" />
          </Ark>
        </Ark>
      {/each}
    </Ark>
  {/if}
  <Ark as="div" class={chatInputRowBase}>
    <input
      bind:this={fileEl}
      type="file"
      multiple
      tabindex="-1"
      aria-hidden="true"
      class="hidden"
      onchange={(event) => addFiles(event.currentTarget.files)}
    />
    <Ark
      as="button"
      type="button"
      aria-label="Add attachment"
      {disabled}
      class={chatInputTriggerBase}
      onclick={() => fileEl?.click()}
    >
      <PaperclipIcon class="size-4" />
    </Ark>
    <Textarea
      value={text}
      {placeholder}
      aria-label="Message"
      {disabled}
      rows={1}
      class="min-h-10 flex-1 resize-none"
      oninput={(event) => setText(event.currentTarget.value)}
      onkeydown={(event) => {
        // `isComposing` guards the Enter that confirms a CJK/emoji candidate —
        // treating it as a send discards the in-progress composition.
        if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
          event.preventDefault();
          send();
        }
      }}
    ></Textarea>
    <Button
      size="icon"
      aria-label="Send message"
      disabled={disabled || (text.trim() === '' && attachments.length === 0)}
      onclick={send}
    >
      <SendIcon class="size-4" />
    </Button>
  </Ark>
</Ark>
