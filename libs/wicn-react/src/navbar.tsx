// libs/wicn-react/src/navbar.tsx
// Closely based on: shadcnblocks navbar6 / navbar7 (design reference),
//                   re-based on @ark-ui/react/navigation-menu + collapsible (Ark UI)
/// <reference lib="dom" />
import * as React from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { Portal } from '@ark-ui/react/portal';
import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogCloseTrigger,
  DialogTitle,
  DialogDescription,
} from '@ark-ui/react/dialog';
import {
  navbarVariants,
  navbarProviderBase,
  navbarContainerBase,
  navbarDensityVariants,
  navbarShrunkBase,
  navbarBrandBase,
  navbarMenuBase,
  navbarMenuPlacementVariants,
  navbarActionsBase,
  navbarTriggerVariants,
  navbarActivationAreaBase,
  navbarMobileContentBase,
  navbarMobileHeaderBase,
  navbarMobileMenuBase,
  navbarMobileActionsBase,
  cn,
  type NavbarDensity,
  type NavbarVariant,
  type NavMenuDensity,
} from 'wicn-core';
import { NavMenu } from './nav-menu';

const SCROLL_THRESHOLD = 24;

interface NavbarContextValue {
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  scrolled: boolean;
  density: NavbarDensity;
  variant: NavbarVariant;
  floating: boolean;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  slots: { brand: React.ReactNode; actions: React.ReactNode };
  setSlot: (key: 'brand' | 'actions', node: React.ReactNode) => void;
  portalRef: React.RefObject<HTMLDivElement | null>;
}

const NavbarContext = React.createContext<NavbarContextValue | null>(null);

function useNavbar() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error('Navbar parts must be used within a NavbarProvider.');
  }
  return context;
}

function useNavbarSlot(key: 'brand' | 'actions', children: React.ReactNode) {
  const { setSlot } = useNavbar();
  React.useLayoutEffect(() => {
    setSlot(key, children);
  }, [key, children, setSlot]);
}

function NavbarProvider({
  defaultOpen = false,
  variant = 'sticky',
  floating = false,
  density = 'relaxed',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean;
  variant?: NavbarVariant;
  floating?: boolean;
  density?: NavbarDensity;
}) {
  const id = React.useId();
  const providerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(defaultOpen);
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [slots, setSlots] = React.useState<{ brand: React.ReactNode; actions: React.ReactNode }>({
    brand: null,
    actions: null,
  });

  const setSlot = React.useCallback((key: 'brand' | 'actions', node: React.ReactNode) => {
    setSlots((prev) => (prev[key] === node ? prev : { ...prev, [key]: node }));
  }, []);

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

  const contextValue = React.useMemo(
    () => ({ id, open, setOpen, scrolled, density, variant, floating, hovered, setHovered, slots, setSlot, portalRef: providerRef }),
    [id, open, scrolled, density, variant, floating, hovered, slots, setSlot],
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      <div ref={providerRef} data-slot="navbar-provider" className={cn(navbarProviderBase, className)} {...props}>
        {children}
      </div>
    </NavbarContext.Provider>
  );
}

function Navbar({ className, children, ...props }: React.ComponentProps<'header'>) {
  const { scrolled, variant, floating, hovered, setHovered } = useNavbar();
  const hidden = variant === 'hide' && scrolled && !hovered;
  return (
    <header
      data-slot="navbar"
      data-scrolled={scrolled || undefined}
      data-hidden={hidden || undefined}
      className={cn(navbarVariants({ variant, floating }), className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </header>
  );
}

function NavbarActivationArea({ className, children, ...props }: HTMLArkProps<'div'>) {
  const { setHovered } = useNavbar();
  return (
    <ark.div
      data-slot="navbar-activation-area"
      className={cn(navbarActivationAreaBase, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </ark.div>
  );
}

function NavbarContainer({ className, children, ...props }: HTMLArkProps<'div'>) {
  const { scrolled, density, variant } = useNavbar();
  const shrunk = variant === 'shrink' && scrolled;
  return (
    <ark.div
      data-slot="navbar-container"
      data-shrunk={shrunk || undefined}
      className={cn(navbarContainerBase, navbarDensityVariants({ density }), shrunk && navbarShrunkBase, className)}
      {...props}
    >
      {children}
    </ark.div>
  );
}

function NavbarBrand({ className, children, ...props }: HTMLArkProps<'div'>) {
  useNavbarSlot('brand', children);
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
  const { scrolled, density, variant } = useNavbar();
  const menuDensity: NavMenuDensity =
    density === 'compact' || (variant === 'shrink' && scrolled) ? 'compact' : 'relaxed';
  return (
    <ark.div
      data-slot="navbar-menu"
      data-placement={placement}
      className={cn(navbarMenuBase, navbarMenuPlacementVariants({ placement }), className)}
      {...props}
    >
      <NavMenu density={menuDensity}>{children}</NavMenu>
    </ark.div>
  );
}

function NavbarActions({ className, children, ...props }: HTMLArkProps<'div'>) {
  useNavbarSlot('actions', children);
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
  const { id, open, setOpen, floating } = useNavbar();
  return (
    <button
      type="button"
      data-slot="navbar-trigger"
      aria-expanded={open}
      aria-controls={id}
      aria-label={ariaLabel ?? 'Toggle navigation menu'}
      className={cn(navbarTriggerVariants({ floating }), 'md:hidden', className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children ?? (
        <svg
          className="size-4"
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
  const { id, open, setOpen, slots, floating, portalRef } = useNavbar();
  return (
    <Portal container={portalRef}>
      <DialogRoot open={open} onOpenChange={({ open }) => setOpen(open)}>
        <DialogBackdrop className="absolute inset-0 z-[100] bg-background/60 backdrop-blur-sm" />
        <DialogPositioner className="absolute inset-0 z-[100]">
          <DialogContent id={id} data-slot="navbar-mobile" className={cn(navbarMobileContentBase, className)} {...props}>
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <DialogDescription className="sr-only">Mobile navigation menu</DialogDescription>
            <div className={navbarMobileHeaderBase}>
              {slots.brand}
              <DialogCloseTrigger asChild>
                <button type="button" aria-label="Close navigation menu" className={cn(navbarTriggerVariants({ floating }))}>
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </DialogCloseTrigger>
            </div>
            <div className={navbarMobileMenuBase}>{children}</div>
            {slots.actions ? <div className={navbarMobileActionsBase}>{slots.actions}</div> : null}
          </DialogContent>
        </DialogPositioner>
      </DialogRoot>
    </Portal>
  );
}

export { Navbar };
export {
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
