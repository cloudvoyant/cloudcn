import { lazy, Suspense } from 'react';

const reactModules = import.meta.glob('./examples/*/*/react.tsx');

export default function ReactRouter({ component, example }: { component: string; example: string }) {
  const path = `./examples/${component}/${example}/react.tsx`;
  const importFn = reactModules[path] as (() => Promise<{ default: React.ComponentType }>) | undefined;

  if (!importFn) {
    return (
      <div className="text-sm text-red-500">
        React example not found: {component}/{example}
      </div>
    );
  }

  const Comp = lazy(importFn);

  return (
    <Suspense fallback={<div className="text-sm text-muted-foreground p-4">Loading React...</div>}>
      <Comp />
    </Suspense>
  );
}
