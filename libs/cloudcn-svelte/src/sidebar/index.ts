// libs/cloudcn-svelte/src/sidebar/index.ts
// Unified export. `Sidebar` is a namespace object grouping all parts, so the
// compound API works:
//   <Sidebar.Provider> <Sidebar.Root> <Sidebar.Header> ... </Sidebar.Provider>
// Flat named exports (SidebarProvider, SidebarRoot, SidebarHeader, ...) are
// retained for backwards compatibility.

import Provider from './Provider.svelte';
import Root from './Root.svelte';
import Header from './Header.svelte';
import Footer from './Footer.svelte';
import Separator from './Separator.svelte';
import Content from './Content.svelte';
import Group from './Group.svelte';
import GroupLabel from './GroupLabel.svelte';
import GroupAction from './GroupAction.svelte';
import GroupContent from './GroupContent.svelte';
import Menu from './Menu.svelte';
import MenuItem from './MenuItem.svelte';
import MenuButton from './MenuButton.svelte';
import MenuAction from './MenuAction.svelte';
import MenuBadge from './MenuBadge.svelte';
import MenuSkeleton from './MenuSkeleton.svelte';
import MenuSub from './MenuSub.svelte';
import MenuSubItem from './MenuSubItem.svelte';
import MenuSubButton from './MenuSubButton.svelte';
import Trigger from './Trigger.svelte';
import Rail from './Rail.svelte';
import Inset from './Inset.svelte';
import Input from './Input.svelte';
import { getSidebarContext as useSidebar } from './context.svelte.js';

export const Sidebar = {
  Provider,
  Root,
  Header,
  Footer,
  Separator,
  Content,
  Group,
  GroupLabel,
  GroupAction,
  GroupContent,
  Menu,
  MenuItem,
  MenuButton,
  MenuAction,
  MenuBadge,
  MenuSkeleton,
  MenuSub,
  MenuSubItem,
  MenuSubButton,
  Trigger,
  Rail,
  Inset,
  Input,
  useSidebar,
} as const;

export {
  Provider as SidebarProvider,
  Root as SidebarRoot,
  Header as SidebarHeader,
  Footer as SidebarFooter,
  Separator as SidebarSeparator,
  Content as SidebarContent,
  Group as SidebarGroup,
  GroupLabel as SidebarGroupLabel,
  GroupAction as SidebarGroupAction,
  GroupContent as SidebarGroupContent,
  Menu as SidebarMenu,
  MenuItem as SidebarMenuItem,
  MenuButton as SidebarMenuButton,
  MenuAction as SidebarMenuAction,
  MenuBadge as SidebarMenuBadge,
  MenuSkeleton as SidebarMenuSkeleton,
  MenuSub as SidebarMenuSub,
  MenuSubItem as SidebarMenuSubItem,
  MenuSubButton as SidebarMenuSubButton,
  Trigger as SidebarTrigger,
  Rail as SidebarRail,
  Inset as SidebarInset,
  Input as SidebarInput,
  useSidebar,
};
