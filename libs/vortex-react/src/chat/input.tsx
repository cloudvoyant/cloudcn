// libs/vortex-react/src/chat/input.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; the repo's sourced Textarea (Shark UI field via
// @ark-ui/react/field) and Button wrappers.
// ChatInput: composer with an auto-growing textarea, attachment picker
// (native file input behind a paperclip trigger), attachment chips, and a
// send button. Enter sends; Shift+Enter inserts a newline. Controlled via
// value/onValueChange or uncontrolled.
import { useRef, useState } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
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
import { Button } from '../button';
import { Textarea } from '../textarea';
import { PaperclipIcon, SendIcon, XIcon } from './icons';

let attachmentSeq = 0;

export type ChatInputProps = HTMLArkProps<'div'> & {
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  /** Fires with the trimmed text and any picked attachments, then clears both.
   *  Blob URLs in the attachments transfer to the caller — revoke them there. */
  onSend?: (text: string, attachments: ChatAttachment[]) => void;
  disabled?: boolean;
};

export function ChatInput({
  placeholder = 'Type a message…',
  value,
  onValueChange,
  onSend,
  disabled = false,
  className,
  ...props
}: ChatInputProps) {
  const [internal, setInternal] = useState('');
  const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const text = value ?? internal;

  const setText = (next: string) => {
    if (onValueChange) onValueChange(next);
    else setInternal(next);
  };

  const send = () => {
    const trimmed = text.trim();
    if (disabled || (trimmed === '' && attachments.length === 0)) return;
    onSend?.(trimmed, attachments);
    setText('');
    setAttachments([]);
  };

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    setAttachments((prev) => [
      ...prev,
      ...Array.from(files).map((file) => ({
        id: `attachment-${String(++attachmentSeq)}`,
        name: file.name,
        url: URL.createObjectURL(file),
      })),
    ]);
  };

  return (
    <ark.div className={cn(chatInputBase, className)} {...props}>
      {attachments.length > 0 ? (
        <ark.ul className={chatInputAttachmentsBase}>
          {attachments.map((attachment) => (
            <ark.li key={attachment.id} className={chatInputAttachmentBase}>
              <span>{attachment.name}</span>
              <ark.button
                type="button"
                aria-label={`Remove ${attachment.name}`}
                className={chatInputAttachmentDeleteBase}
                onClick={() =>
                  setAttachments((prev) => {
                    // The chip was the only holder of this blob URL; without
                    // revoking it the File leaks for the page lifetime.
                    if (attachment.url) URL.revokeObjectURL(attachment.url);
                    return prev.filter((a) => a.id !== attachment.id);
                  })
                }
              >
                <XIcon className="size-3" />
              </ark.button>
            </ark.li>
          ))}
        </ark.ul>
      ) : null}
      <ark.div className={chatInputRowBase}>
        <input
          ref={fileRef}
          type="file"
          multiple
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          onChange={(event) => addFiles(event.currentTarget.files)}
        />
        <ark.button
          type="button"
          aria-label="Add attachment"
          disabled={disabled}
          className={chatInputTriggerBase}
          onClick={() => fileRef.current?.click()}
        >
          <PaperclipIcon className="size-4" />
        </ark.button>
        <Textarea
          value={text}
          placeholder={placeholder}
          aria-label="Message"
          disabled={disabled}
          rows={1}
          className="min-h-10 flex-1 resize-none"
          onChange={(event) => setText(event.currentTarget.value)}
          onKeyDown={(event) => {
            // `isComposing` guards the Enter that confirms a CJK/emoji candidate —
            // treating it as a send discards the in-progress composition.
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              send();
            }
          }}
        />
        <Button
          size="icon"
          aria-label="Send message"
          disabled={disabled || (text.trim() === '' && attachments.length === 0)}
          onClick={send}
        >
          <SendIcon className="size-4" />
        </Button>
      </ark.div>
    </ark.div>
  );
}
