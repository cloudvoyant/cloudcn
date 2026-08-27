// apps/docs/src/components/FrameworkSelector.tsx
// React port of the Astro framework selector: React/Svelte toggle that drives
// `html[data-framework]` (which the demo islands key off of) + localStorage.
import { useEffect, useState } from 'react';
import { getStoredFramework, setFramework, type Framework } from '../lib/framework';

const FRAMEWORKS: { id: Framework; label: string }[] = [
  { id: 'react', label: 'React' },
  { id: 'svelte', label: 'Svelte' },
];

export default function FrameworkSelector() {
  const [framework, setFrameworkState] = useState<Framework>('react');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setFrameworkState(getStoredFramework());
    setReady(true);
  }, []);

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-muted p-1 text-xs font-medium"
      role="group"
      aria-label="Framework"
      data-framework-selector
      data-ready={ready || undefined}
    >
      {FRAMEWORKS.map((fw) => (
        <button
          key={fw.id}
          type="button"
          className="rounded-full px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
          data-fw={fw.id}
          aria-pressed={framework === fw.id}
          onClick={() => setFrameworkState(setFramework(fw.id))}
        >
          {fw.label}
        </button>
      ))}
    </div>
  );
}
