// apps/cloudcn-docs/src/components/examples/scroll-area/default/react.tsx
import { ScrollArea } from 'cloudcn-react';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function ReactScrollAreaDefault() {
  return (
    <ScrollArea.Root className="h-72 w-64 rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <div className="p-4">
            <p className="mb-4 text-sm font-medium">Tags</p>
            {tags.map((tag) => (
              <div key={tag} className="border-t border-border py-2 text-sm text-muted-foreground">
                {tag}
              </div>
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
