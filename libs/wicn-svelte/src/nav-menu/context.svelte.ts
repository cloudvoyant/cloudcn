// libs/wicn-svelte/src/nav-menu/context.svelte.ts
// Shared Svelte context for the NavMenu style (density from the root, variant
// from the item). NavMenuTrigger/NavMenuLink read it to resolve their cva
// directly; NavMenuContent overrides it (relaxed/default + inContent) so
// dropdown panel links use the plain link style and never inherit the
// top-level density/variant.
import { getContext, setContext } from 'svelte';
import type { NavMenuDensity, NavMenuVariant } from 'wicn-core';

export interface NavMenuStyle {
  density: NavMenuDensity;
  variant: NavMenuVariant;
  inContent: boolean;
}

const NAV_MENU_STYLE_KEY = Symbol('wicn.nav-menu.style');

export function setNavMenuStyle(style: NavMenuStyle) {
  setContext(NAV_MENU_STYLE_KEY, style);
}

export function getNavMenuStyle(): NavMenuStyle {
  return getContext<NavMenuStyle>(NAV_MENU_STYLE_KEY) ?? { density: 'relaxed', variant: 'default', inContent: false };
}
