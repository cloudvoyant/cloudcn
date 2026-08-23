// apps/wicn-docs/src/components/examples/splitter/collapsible/react.tsx
import { Splitter } from 'wicn-react';

export default function ReactSplitterCollapsible() {
  return (
    <div className="h-64 w-full rounded-md border border-border bg-background">
      <Splitter.Root
        defaultSize={[40, 60]}
        panels={[
          { id: 'a', collapsible: true, collapsedSize: 5, minSize: 25 },
          { id: 'b', minSize: 50 },
        ]}
      >
        <Splitter.Panel id="a" className="flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="b" className="flex items-center justify-center">
          <span className="text-sm font-medium">B</span>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
