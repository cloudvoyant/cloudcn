// apps/cloudcn-docs/src/components/examples/splitter/disabled/react.tsx
import { Splitter } from 'cloudcn-react';

export default function ReactSplitterDisabled() {
  return (
    <div className="h-64 w-full rounded-md border border-border bg-background">
      <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
        <Splitter.Panel id="a" className="flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" disabled>
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="b" className="flex items-center justify-center">
          <span className="text-sm font-medium">B</span>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
