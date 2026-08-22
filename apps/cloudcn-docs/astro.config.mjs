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
    optimizeDeps: {
      // Workspace packages resolve to built dist/; don't let Vite pre-bundle and
      // cache a stale copy (new named exports then throw
      // "does not provide an export named ..." until a dev-server restart).
      // Excluding them makes Vite watch the dist files as source modules instead.
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
