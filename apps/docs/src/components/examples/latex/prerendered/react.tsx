// apps/docs/src/components/examples/latex/prerendered/react.tsx
import { LaTeX } from '@cloudvoyant/vortex-react';
import { toLaTeX } from '@cloudvoyant/vortex-ui';

const latex = '\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}';

export default function ReactLaTeXPrerendered() {
  return <LaTeX latex={latex} html={toLaTeX(latex, { displayMode: true })} />;
}
