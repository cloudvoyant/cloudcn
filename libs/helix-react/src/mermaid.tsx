// libs/helix-react/src/mermaid.tsx
// Closely based on: diffbook Mermaid (packages/diffbook-ui/src/components/Mermaid.tsx placeholder +
// apps/book/src/components/article-body.tsx client renderer)
import { useEffect, useState } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  mermaidRootBase,
  mermaidSourceBase,
  mermaidSvgBase,
  mermaidLoadingBase,
  renderMermaidSource,
  mermaidSvgAspectRatio,
  cn,
} from '@cloudvoyant/helix';
import type { MermaidProps as MermaidPropsBase } from '@cloudvoyant/helix';

export type MermaidProps = HTMLArkProps<'div'> & MermaidPropsBase;

type Status = 'loading' | 'done' | 'error';

/**
 * Mermaid diagram. Two rendering paths:
 *
 * - **Prerendered** (`svg` prop): the SVG markup is rendered immediately — the server/static
 *   path. `mermaid` is never imported client-side. Its `viewBox` reserves the aspect ratio on
 *   the root container, so the diagram paints at its final size with no layout shift.
 * - **Client** (no `svg`): an SSR-safe loading skeleton is shown while `mermaid` is dynamically
 *   imported and the diagram renders; the source stays available in a `<noscript>` block for
 *   no-JS users and is shown directly if the render fails.
 */
export function Mermaid({ code, svg, className, ...props }: MermaidProps) {
  const [status, setStatus] = useState<Status>(svg !== undefined ? 'done' : 'loading');
  const [rendered, setRendered] = useState<string | null>(svg ?? null);
  const aspectRatio = rendered !== null ? mermaidSvgAspectRatio(rendered) : undefined;

  useEffect(() => {
    if (svg !== undefined) return; // prerendered — nothing to load client-side
    let cancelled = false;
    setStatus('loading');
    setRendered(null);
    renderMermaidSource(code)
      .then((markup) => {
        if (!cancelled) {
          setRendered(markup);
          setStatus('done');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [code, svg]);

  return (
    <ark.div
      {...props}
      data-mermaid-code={JSON.stringify(code)}
      data-mermaid-src={rendered !== null ? code : undefined}
      data-mermaid-state={status}
      style={aspectRatio !== undefined ? { aspectRatio, ...props.style } : props.style}
      className={cn(mermaidRootBase, className)}
    >
      {rendered !== null ? (
        <div className={mermaidSvgBase} dangerouslySetInnerHTML={{ __html: rendered }} />
      ) : status === 'error' ? (
        <pre className={mermaidSourceBase}>{code}</pre>
      ) : (
        <>
          <div className={mermaidLoadingBase} role="status" aria-label="Rendering diagram">
            <span aria-hidden="true" className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-muted-foreground/25 border-t-muted-foreground" />
            <span className="text-sm text-muted-foreground">Rendering diagram</span>
          </div>
          <noscript>
            <pre className={mermaidSourceBase}>{code}</pre>
          </noscript>
        </>
      )}
    </ark.div>
  );
}
