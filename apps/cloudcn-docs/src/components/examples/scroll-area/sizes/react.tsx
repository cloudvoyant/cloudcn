// apps/cloudcn-docs/src/components/examples/scroll-area/sizes/react.tsx
import { ScrollArea } from 'cloudcn-react';

const items = Array.from({ length: 12 }).map((_, i) => `Item ${i + 1}`);

export default function ReactScrollAreaSizes() {
  return (
    <div className="flex gap-4">
      <ScrollArea.Root className="h-40 w-48 rounded-md border border-border [--scrollbar-size:0.25rem]">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <div className="p-4">
              {items.map((item) => (
                <div key={item} className="py-1 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <ScrollArea.Root className="h-40 w-48 rounded-md border border-border [--scrollbar-size:0.75rem]">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <div className="p-4">
              {items.map((item) => (
                <div key={item} className="py-1 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
