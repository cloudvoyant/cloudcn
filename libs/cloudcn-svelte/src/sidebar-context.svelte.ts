// libs/cloudcn-svelte/src/sidebar-context.svelte.ts
// Source: cloudcn-react sidebar context (shadcn/ui sidebar, re-based on Ark UI)
import { getContext, setContext } from 'svelte';
import type { SidebarContextProps } from 'cloudcn-core';

export const SIDEBAR_CONTEXT_KEY = Symbol('cloudcn.sidebar');

export function setSidebarContext(context: SidebarContextProps) {
  setContext(SIDEBAR_CONTEXT_KEY, context);
}

export function getSidebarContext(): SidebarContextProps {
  const context = getContext<SidebarContextProps>(SIDEBAR_CONTEXT_KEY);
  if (!context) {
    throw new Error('Sidebar parts must be used within a SidebarProvider.');
  }
  return context;
}
