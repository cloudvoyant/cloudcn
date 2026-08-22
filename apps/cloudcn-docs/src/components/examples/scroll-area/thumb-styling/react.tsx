// apps/cloudcn-docs/src/components/examples/scroll-area/thumb-styling/react.tsx
import { ScrollArea } from 'cloudcn-react';

export default function ReactScrollAreaThumbStyling() {
  return (
    <ScrollArea.Root className="h-64 w-64 rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <div className="p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="py-1 text-sm">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb className="bg-primary" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
