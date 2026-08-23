// libs/wicn-svelte/src/navbar/index.ts
// Unified export. `Navbar` is a namespace object grouping all parts, so the
// compound API works:
//   <Navbar.Provider> <Navbar.Root> <Navbar.Container> ... </Navbar.Provider>
// Flat named exports (NavbarProvider, NavbarRoot, NavbarContainer, ...) are
// retained for backwards compatibility.

import NavbarProvider from './NavbarProvider.svelte';
import NavbarRoot from './NavbarRoot.svelte';
import NavbarContainer from './NavbarContainer.svelte';
import NavbarBrand from './NavbarBrand.svelte';
import NavbarMenu from './NavbarMenu.svelte';
import NavbarActions from './NavbarActions.svelte';
import NavbarTrigger from './NavbarTrigger.svelte';
import NavbarMobile from './NavbarMobile.svelte';
import { getNavbarContext as useNavbar } from './NavbarContext.svelte';

export const Navbar = {
  Provider: NavbarProvider,
  Root: NavbarRoot,
  Container: NavbarContainer,
  Brand: NavbarBrand,
  Menu: NavbarMenu,
  Actions: NavbarActions,
  Trigger: NavbarTrigger,
  Mobile: NavbarMobile,
  useNavbar,
} as const;

export {
  NavbarProvider,
  NavbarRoot,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobile,
  useNavbar,
};
