// apps/cloudcn-docs/src/components/examples/scroll-area/both/react.tsx
import { ScrollArea } from 'cloudcn-react';

export default function ReactScrollAreaBoth() {
  return (
    <ScrollArea.Root className="h-64 w-64 rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <div className="h-[600px] w-[400px] p-4">
            <p className="text-sm">Content that overflows both horizontally and vertically.</p>
          </div>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
