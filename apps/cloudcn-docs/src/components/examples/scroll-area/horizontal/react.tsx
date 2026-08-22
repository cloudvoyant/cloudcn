// apps/cloudcn-docs/src/components/examples/scroll-area/horizontal/react.tsx
import { ScrollArea } from 'cloudcn-react';

export default function ReactScrollAreaHorizontal() {
  return (
    <ScrollArea.Root className="h-24 w-full rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <div className="flex gap-2 p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="shrink-0 rounded-md bg-muted px-3 py-1 text-sm">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
