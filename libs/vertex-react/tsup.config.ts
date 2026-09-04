import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime', '@ark-ui/react', '@cloudvoyant/vertex-ui', 'mermaid', 'katex', 'shiki', 'recharts', 'manim-web', '@tanstack/charts'],
});
