// libs/wicn-svelte/src/navbar/NavbarContext.svelte.ts
// Source: wicn-react navbar context (shadcnblocks navbar6/7, re-based on Ark UI)
import { getContext, setContext } from 'svelte';

export interface NavbarContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  scrolled: boolean;
}

export const NAVBAR_CONTEXT_KEY = Symbol('wicn.navbar');

export function setNavbarContext(context: NavbarContextValue) {
  setContext(NAVBAR_CONTEXT_KEY, context);
}

export function getNavbarContext(): NavbarContextValue {
  const context = getContext<NavbarContextValue>(NAVBAR_CONTEXT_KEY);
  if (!context) {
    throw new Error('Navbar parts must be used within a NavbarProvider.');
  }
  return context;
}
