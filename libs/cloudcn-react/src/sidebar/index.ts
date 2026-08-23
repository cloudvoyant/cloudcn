// libs/cloudcn-react/src/sidebar/index.ts
// Unified export. `Sidebar` is the root component (renders the sidebar panel)
// with the other parts attached as static members, so both APIs work:
//   <Sidebar> ... </Sidebar>            (flat root usage)
//   <Sidebar.Provider> <Sidebar.Root>   (compound/namespace usage)
// Flat named exports (SidebarProvider, SidebarHeader, ...) are retained for
// backwards compatibility.

import { Provider } from './Provider';
import { Root } from './Root';
import { Header } from './Header';
import { Footer } from './Footer';
import { Separator } from './Separator';
import { Content } from './Content';
import { Group } from './Group';
import { GroupAction } from './GroupAction';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import { MenuLink } from './MenuLink';
import { MenuAction } from './MenuAction';
import { MenuBadge } from './MenuBadge';
import { MenuSkeleton } from './MenuSkeleton';
import { MenuSub } from './MenuSub';
import { MenuSubItem } from './MenuSubItem';
import { MenuSubButton } from './MenuSubButton';
import { Trigger } from './Trigger';
import { Rail } from './Rail';
import { Inset } from './Inset';
import { Input } from './Input';
import { useSidebar } from './context';

const Sidebar = Object.assign(Root, {
  Provider,
  Root,
  Header,
  Footer,
  Separator,
  Content,
  Group,
  GroupAction,
  Menu,
  MenuItem,
  MenuButton,
  MenuLink,
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
});

export { Sidebar };

export {
  Provider as SidebarProvider,
  Root as SidebarRoot,
  Header as SidebarHeader,
  Footer as SidebarFooter,
  Separator as SidebarSeparator,
  Content as SidebarContent,
  Group as SidebarGroup,
  GroupAction as SidebarGroupAction,
  Menu as SidebarMenu,
  MenuItem as SidebarMenuItem,
  MenuButton as SidebarMenuButton,
  MenuLink as SidebarMenuLink,
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
