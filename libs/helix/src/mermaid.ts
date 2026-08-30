// libs/helix/src/mermaid.ts
// Closely based on: diffbook Mermaid (packages/diffbook-ui/src/components/Mermaid.tsx placeholder +
// apps/book/src/components/article-body.tsx client renderer)

/** Root container: escapes prose margins, keeps wide diagrams scrollable. */
export const mermaidRootBase = 'not-prose my-4 overflow-x-auto';

/** Placeholder `<pre>` showing the raw diagram source until (or instead of) rendering. */
export const mermaidSourceBase =
  'w-full overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm whitespace-pre';

/** Wrapper around the rendered SVG: centered, scaled down to the container width. */
export const mermaidSvgBase = 'flex w-full justify-center [&>svg]:max-w-full';

/** Props shared by the React and Svelte Mermaid wrappers; framework wrappers intersect
 *  these with their host element's HTML attributes. */
export interface MermaidProps {
  /** Mermaid diagram source. */
  code: string;
  /** Extra classes for the root container. */
  className?: string;
}

/** Mermaid `themeVariables` keys mapped to the helix shadcn CSS custom properties they
 *  follow. Resolved at render time so brand-theme overrides apply to diagrams. */
const mermaidThemeVariableTokens = {
  primaryColor: '--card',
  primaryTextColor: '--foreground',
  primaryBorderColor: '--border',
  lineColor: '--muted-foreground',
  secondaryColor: '--muted',
  tertiaryColor: '--accent',
  background: '--background',
  mainBkg: '--card',
  nodeBorder: '--border',
} as const;

let scratchCtx: CanvasRenderingContext2D | null | undefined;

/** Converts a CSS color (helix tokens are `oklch()`, some with alpha) to the hex/rgba form
 *  mermaid's color parser (khroma) accepts, by painting it through a 1x1 canvas. Returns
 *  the input unchanged when the environment can't normalize it. */
function normalizeMermaidColor(value: string): string {
  scratchCtx ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  if (!scratchCtx) return value;
  // An invalid color leaves fillStyle at the probe, so the painted pixel says `rgb(1 2 3)`.
  scratchCtx.fillStyle = 'rgb(1 2 3)';
  scratchCtx.fillStyle = value;
  scratchCtx.clearRect(0, 0, 1, 1);
  scratchCtx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = scratchCtx.getImageData(0, 0, 1, 1).data;
  if (r === 1 && g === 2 && b === 3 && a === 255) return value;
  if (a === 255) return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
  return `rgba(${r}, ${g}, ${b}, ${Math.round((a / 255) * 1000) / 1000})`;
}

/** Resolves mermaid `themeVariables` from the shadcn CSS custom properties currently set
 *  on `<html>` (so the active color mode and any brand-theme overrides are picked up).
 *  Tokens that are undefined are omitted, leaving mermaid's own theme defaults in place. */
export function resolveMermaidThemeVariables(): Record<string, string> {
  const styles = getComputedStyle(document.documentElement);
  const themeVariables: Record<string, string> = {};
  for (const [key, token] of Object.entries(mermaidThemeVariableTokens)) {
    const value = styles.getPropertyValue(token).trim();
    if (value) themeVariables[key] = normalizeMermaidColor(value);
  }
  return themeVariables;
}

let mermaidSeq = 0;

/**
 * Dynamically import mermaid and render `code` to an SVG string. The import stays
 * client-only and lazy, so mermaid never enters the SSR/initial bundle.
 *
 * Diagrams render with `securityLevel: 'strict'` (mermaid sanitizes the output with
 * DOMPurify and strips click bindings, so untrusted sources cannot execute scripts) and
 * `suppressErrorRendering: true` (without it, mermaid appends a "Syntax error in text"
 * SVG to `document.body` on every failed render). The render-id counter is module-scoped
 * so concurrent renders from any number of components never collide.
 */
export async function renderMermaidSource(code: string): Promise<string> {
  const mermaid = (await import('mermaid')).default;
  const dark = document.documentElement.classList.contains('dark');
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    suppressErrorRendering: true,
    theme: dark ? 'dark' : 'default',
    themeVariables: resolveMermaidThemeVariables(),
  });
  const { svg } = await mermaid.render(`helix-mmd-${Date.now()}-${mermaidSeq++}`, code);
  return svg;
}
