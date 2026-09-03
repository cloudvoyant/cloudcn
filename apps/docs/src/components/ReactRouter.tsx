// Use eager: true to bundle all examples and eliminate lazy-loading network delays,
// which fixes hydration race conditions in the E2E tests.
const reactModules = import.meta.glob('./examples/*/*/react.tsx', { eager: true });

export default function ReactRouter({ component, example }: { component: string; example: string }) {
  const path = `./examples/${component}/${example}/react.tsx`;
  const module = reactModules[path] as { default: React.ComponentType } | undefined;

  if (!module) {
    return (
      <div className="text-sm text-red-500">
        React example not found: {component}/{example}
      </div>
    );
  }

  const Comp = module.default;

  return <Comp />;
}
