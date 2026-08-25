// libs/wicn-svelte/src/navbar/index.ts
// Unified export. `Navbar` parts are exported flat (NavbarProvider, Navbar,
// NavbarContainer, and the other named parts) as the only public API:
//   <NavbarProvider> <Navbar> <NavbarContainer> ... </NavbarProvider>

import NavbarProvider from './NavbarProvider.svelte';
import Navbar from './NavbarRoot.svelte';
import NavbarActivationArea from './NavbarActivationArea.svelte';
import NavbarContainer from './NavbarContainer.svelte';
import NavbarBrand from './NavbarBrand.svelte';
import NavbarMenu from './NavbarMenu.svelte';
import NavbarActions from './NavbarActions.svelte';
import NavbarTrigger from './NavbarTrigger.svelte';
import NavbarMobile from './NavbarMobile.svelte';
import { getNavbarContext as useNavbar } from './NavbarContext.svelte';

export {
  Navbar,
  NavbarProvider,
  NavbarActivationArea,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobile,
  useNavbar,
};
