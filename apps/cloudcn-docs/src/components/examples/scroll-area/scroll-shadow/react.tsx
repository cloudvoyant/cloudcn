// apps/cloudcn-docs/src/components/examples/scroll-area/scroll-shadow/react.tsx
import { ScrollArea } from 'cloudcn-react';

export default function ReactScrollAreaScrollShadow() {
  return (
    <ScrollArea.Root className="h-64 w-64 rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content className="data-[overflow-y]:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="border-t border-border py-2 text-sm text-muted-foreground">
                Item {i + 1}
              </p>
            ))}
          </div>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
