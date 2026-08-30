// libs/helix-react/src/mermaid.tsx
// Closely based on: diffbook Mermaid (packages/diffbook-ui/src/components/Mermaid.tsx placeholder +
// apps/book/src/components/article-body.tsx client renderer)
import { useEffect, useState } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { mermaidRootBase, mermaidSourceBase, mermaidSvgBase, renderMermaidSource, cn } from '@cloudvoyant/helix';
import type { MermaidProps as MermaidPropsBase } from '@cloudvoyant/helix';

export type MermaidProps = HTMLArkProps<'div'> & MermaidPropsBase;

/**
 * Mermaid diagram rendered client-side. The SSR/first-paint output is a placeholder
 * `<pre>` carrying the raw source; after mount, mermaid is dynamically imported and
 * replaces the placeholder with the rendered SVG. Invalid diagrams and failed mermaid
 * loads leave the source visible.
 */
export function Mermaid({ code, className, ...props }: MermaidProps) {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setSvg(null);
    renderMermaidSource(code)
      .then((rendered) => {
        if (!cancelled) setSvg(rendered);
      })
      .catch(() => {
        /* invalid diagram or failed mermaid load — leave the source visible */
      });
    return () => {
      cancelled = true;
    };
  }, [code]);

  return (
    <ark.div
      {...props}
      data-mermaid-code={JSON.stringify(code)}
      data-mermaid-src={svg !== null ? code : undefined}
      className={cn(mermaidRootBase, className)}
    >
      {svg !== null ? (
        <div className={mermaidSvgBase} dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <pre className={mermaidSourceBase}>{code}</pre>
      )}
    </ark.div>
  );
}
