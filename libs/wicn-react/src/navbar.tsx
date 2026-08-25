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
  const providerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(defaultOpen);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    // Listen to the nearest scrollable ancestor (e.g. a demo container with
    // overflow-y-auto); fall back to the window. `position: sticky` sticks
    // relative to that same container, so data-scrolled stays in sync.
    let target: Element | Window = window;
    for (let n: Element | null = providerRef.current; n; n = n.parentElement) {
      const oy = getComputedStyle(n).overflowY;
      if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') {
        target = n;
        break;
      }
    }
    const getY = () => (target === window ? window.scrollY : (target as Element).scrollTop);
    const onScroll = () => setScrolled(getY() > SCROLL_THRESHOLD);
    onScroll();
    (target as EventTarget).addEventListener('scroll', onScroll, { passive: true });
    return () => (target as EventTarget).removeEventListener('scroll', onScroll);
  }, []);

  const contextValue = React.useMemo(() => ({ id, open, setOpen, scrolled }), [id, open, scrolled]);

  return (
    <NavbarContext.Provider value={contextValue}>
      <div ref={providerRef} data-slot="navbar-provider" className={cn(navbarProviderBase, className)} {...props}>
        {children}
      </div>
    </NavbarContext.Provider>
  );
}

function Navbar({
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

export { Navbar };
export {
  NavbarProvider,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarActions,
  NavbarTrigger,
  NavbarMobile,
  useNavbar,
};
