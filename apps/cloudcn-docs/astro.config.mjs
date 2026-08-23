// apps/cloudcn-docs/astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react(), svelte(), mdx()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        // Serve workspace packages from source in dev so edits to libs/* hot-reload
        // instead of requiring a rebuild (the package exports map points at dist/).
        // Exact-match anchors keep subpath imports (cloudcn-core/theme.css, ...)
        // resolving through the exports map, not through the JS alias.
        { find: /^cloudcn-core$/, replacement: new URL('../../libs/cloudcn-core/src/index.ts', import.meta.url).pathname },
        { find: /^cloudcn-react$/, replacement: new URL('../../libs/cloudcn-react/src/index.ts', import.meta.url).pathname },
        { find: /^cloudcn-svelte$/, replacement: new URL('../../libs/cloudcn-svelte/src/index.ts', import.meta.url).pathname },
      ],
    },
    optimizeDeps: {
      // Workspace packages resolve to source in dev (see alias above); don't let
      // Vite pre-bundle and cache a stale copy (new named exports then throw
      // "does not provide an export named ..." until a dev-server restart).
      exclude: ['cloudcn-core', 'cloudcn-react', 'cloudcn-svelte'],
    },
  },
  redirects: {
    '/docs': '/general/introduction',
    '/docs/general/introduction': '/general/introduction',
    '/docs/general/installation': '/general/installation',
    '/docs/general/theming': '/general/theming',
    '/docs/components/button': '/components/button',
    '/docs/components/toggle-button': '/components/toggle-button',
    '/docs/components/badge': '/components/badge',
    '/docs/components/container': '/components/layout',
    '/docs/components/row': '/components/layout',
    '/docs/components/col': '/components/layout',
    '/docs/components/layout': '/components/layout',
    '/docs/components/stack': '/components/stack',
    '/docs/components/scroll': '/components/scroll',
    '/docs/components/splitter': '/components/splitter',
  },
});
