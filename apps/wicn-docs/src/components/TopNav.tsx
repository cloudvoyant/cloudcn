// apps/wicn-docs/src/components/TopNav.tsx
// The docs site top navigation, built from the wicn Navbar (shrink variant).
import {
  Navbar,
  NavbarProvider,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobile,
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
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
    <NavbarProvider variant="shrink">
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            <WicnLogo className="h-7 w-auto" />
            <span className="font-brand text-sm font-semibold">wicn</span>
          </NavbarBrand>
          <NavbarMenu placement="center">
            <NavMenuList>
              {links.map((link) => (
                <NavMenuItem variant="link" value={link.href} key={link.href}>
                  <NavMenuLink
                    href={link.href}
                    current={currentPath === link.href}
                    className={currentPath === link.href ? 'text-primary' : ''}
                  >
                    {link.label}
                  </NavMenuLink>
                </NavMenuItem>
              ))}
            </NavMenuList>
          </NavbarMenu>
          <NavbarActions>
            <FrameworkSelector />
            <div className="flex-1" />
            <ThemeSelector />
          </NavbarActions>
          <NavbarTrigger />
        </NavbarContainer>
        <NavbarMobile>
          {groups.map((group) => (
            <div key={group.label} className="pb-2">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    currentPath === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </NavbarMobile>
      </Navbar>
    </NavbarProvider>
  );
}
