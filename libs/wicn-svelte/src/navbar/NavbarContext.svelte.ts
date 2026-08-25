// libs/wicn-svelte/src/navbar/NavbarContext.svelte.ts
// Source: wicn-react navbar context (shadcnblocks navbar6/7, re-based on Ark UI)
import { getContext, setContext } from 'svelte';
import type { Snippet } from 'svelte';
import type { NavbarDensity, NavbarVariant } from 'wicn-core';

export interface NavbarContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  scrolled: boolean;
  density: NavbarDensity;
  variant: NavbarVariant;
  floating: boolean;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  slots: { brand?: Snippet; actions?: Snippet };
  setSlot: (key: 'brand' | 'actions', node: Snippet | undefined) => void;
  portalEl: HTMLDivElement | undefined;
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
