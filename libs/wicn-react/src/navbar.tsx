// libs/wicn-react/src/navbar.tsx
// Closely based on: shadcnblocks navbar6 / navbar7 (design reference),
//                   re-based on @ark-ui/react/navigation-menu + collapsible (Ark UI)
/// <reference lib="dom" />
import * as React from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { CollapsibleRoot, CollapsibleContent } from '@ark-ui/react/collapsible';
import {
  navbarVariants,
  navbarProviderBase,
  navbarContainerBase,
  navbarBrandBase,
  navbarMenuBase,
  navbarMenuPlacementVariants,
  navbarActionsBase,
  navbarTriggerBase,
  navbarMobileBase,
  cn,
} from 'wicn-core';
import { NavigationMenu } from './navigation-menu';

const SCROLL_THRESHOLD = 24;

interface NavbarContextValue {
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  scrolled: boolean;
}

const NavbarContext = React.createContext<NavbarContextValue | null>(null);

function useNavbar() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error('Navbar parts must be used within a NavbarProvider.');
  }
  return context;
}

function NavbarProvider({
  defaultOpen = false,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { defaultOpen?: boolean }) {
  const id = React.useId();
  const [open, setOpen] = React.useState(defaultOpen);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const contextValue = React.useMemo(() => ({ id, open, setOpen, scrolled }), [id, open, scrolled]);

  return (
    <NavbarContext.Provider value={contextValue}>
      <div data-slot="navbar-provider" className={cn(navbarProviderBase, className)} {...props}>
        {children}
      </div>
    </NavbarContext.Provider>
  );
}

function NavbarRoot({
  variant = 'sticky',
  className,
  children,
  ...props
}: React.ComponentProps<'header'> & { variant?: 'sticky' | 'floating' }) {
  const { scrolled } = useNavbar();
  return (
    <header
      data-slot="navbar"
      data-scrolled={scrolled || undefined}
      className={cn(navbarVariants({ variant }), className)}
      {...props}
    >
      {children}
    </header>
  );
}

function NavbarContainer({ className, children, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div data-slot="navbar-container" className={cn(navbarContainerBase, className)} {...props}>
      {children}
    </ark.div>
  );
}

function NavbarBrand({ className, children, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div data-slot="navbar-brand" className={cn(navbarBrandBase, className)} {...props}>
      {children}
    </ark.div>
  );
}

function NavbarMenu({
  placement = 'center',
  className,
  children,
  ...props
}: HTMLArkProps<'div'> & { placement?: 'left' | 'center' | 'right' }) {
  return (
    <ark.div
      data-slot="navbar-menu"
      data-placement={placement}
      className={cn(navbarMenuBase, navbarMenuPlacementVariants({ placement }), className)}
      {...props}
    >
      <NavigationMenu>{children}</NavigationMenu>
    </ark.div>
  );
}

function NavbarActions({ className, children, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div data-slot="navbar-actions" className={cn(navbarActionsBase, className)} {...props}>
      {children}
    </ark.div>
  );
}

function NavbarTrigger({
  className,
  children,
  'aria-label': ariaLabel,
  ...props
}: React.ComponentProps<'button'> & { 'aria-label'?: string }) {
  const { id, open, setOpen } = useNavbar();
  return (
    <button
      type="button"
      data-slot="navbar-trigger"
      aria-expanded={open}
      aria-controls={id}
      aria-label={ariaLabel ?? 'Toggle navigation menu'}
      className={cn(navbarTriggerBase, className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )}
    </button>
  );
}

function NavbarMobile({ className, children, ...props }: React.ComponentProps<'div'>) {
  const { id, open, setOpen } = useNavbar();
  return (
    <CollapsibleRoot
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
      className={cn(navbarMobileBase, className)}
      {...props}
    >
      <CollapsibleContent>
        <div data-slot="navbar-mobile" id={id}>
          {children}
        </div>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
}

const Navbar = Object.assign(NavbarRoot, {
  Provider: NavbarProvider,
  Root: NavbarRoot,
  Container: NavbarContainer,
  Brand: NavbarBrand,
  Menu: NavbarMenu,
  Actions: NavbarActions,
  Trigger: NavbarTrigger,
  Mobile: NavbarMobile,
});

export { Navbar };
export {
  NavbarProvider,
  NavbarRoot,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobile,
};
