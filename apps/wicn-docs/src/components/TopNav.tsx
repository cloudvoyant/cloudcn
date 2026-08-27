// apps/wicn-docs/src/components/TopNav.tsx
// The docs site top navigation, built from the wicn Navbar (shrink variant).
import {
  Navbar,
  NavbarProvider,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobileOverlay,
  NavbarMenuList,
  NavbarMenuItem,
  NavbarMenuLink,
} from 'wicn-react';
import { WicnLogo } from './examples/WicnLogo';
import ThemeSelector from './ThemeSelector';
import FrameworkSelector from './FrameworkSelector';

interface NavItem {
  title: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface Props {
  currentPath?: string;
  groups?: NavGroup[];
}

const links = [
  { href: `${import.meta.env.BASE_URL}`, label: 'Home' },
  { href: `${import.meta.env.BASE_URL}general/introduction`, label: 'Docs' },
  { href: `${import.meta.env.BASE_URL}components/button`, label: 'Components' },
];

export default function TopNav({ currentPath = import.meta.env.BASE_URL, groups = [] }: Props) {
  return (
    <NavbarProvider>
      <Navbar variant="shrink">
        <NavbarBrand className="text-primary">
          <WicnLogo className="h-7 w-auto" />
          <span className="font-brand text-sm font-semibold">wicn</span>
        </NavbarBrand>
        <NavbarMenu placement="center">
          <NavbarMenuList>
            {links.map((link) => (
              <NavbarMenuItem variant="link" value={link.href} key={link.href}>
                <NavbarMenuLink
                  href={link.href}
                  current={currentPath === link.href}
                  className={currentPath === link.href ? 'text-primary' : ''}
                >
                  {link.label}
                </NavbarMenuLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenuList>
        </NavbarMenu>
        <NavbarActions>
          <FrameworkSelector />
          <div className="flex-1" />
          <ThemeSelector />
        </NavbarActions>
        <NavbarTrigger />
        <NavbarMobileOverlay>
          {groups.map((group, i) => (
            <section key={group.label} className={i === 0 ? '' : 'mt-4 border-t border-border pt-3'}>
              <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    currentPath === item.href
                      ? 'bg-accent font-medium text-primary'
                      : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </section>
          ))}
        </NavbarMobileOverlay>
      </Navbar>
    </NavbarProvider>
  );
}
