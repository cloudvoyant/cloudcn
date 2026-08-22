// apps/cloudcn-docs/src/components/examples/splitter/multiple-panels/react.tsx
import { Splitter } from 'cloudcn-react';

export default function ReactSplitterMultiplePanels() {
  return (
    <div className="h-64 w-full rounded-md border border-border bg-background">
      <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }, { id: 'c' }]}>
        <Splitter.Panel id="a" className="flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="b" className="flex items-center justify-center">
          <span className="text-sm font-medium">B</span>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="b:c">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="c" className="flex items-center justify-center">
          <span className="text-sm font-medium">C</span>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
