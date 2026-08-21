// libs/cloudcn-react/src/sidebar.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
/// <reference lib="dom" />
import * as React from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  type DrawerRootProps,
} from '@ark-ui/react/drawer';
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent as ArkTooltipContent,
} from '@ark-ui/react/tooltip';
import {
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_MOBILE,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_KEYBOARD_SHORTCUT,
  sidebarMenuButtonVariants,
  sidebarStyles,
  cn,
  type SidebarContextProps,
} from 'cloudcn-core';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

type SidebarContextValue = SidebarContextProps;

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobileSet, setIsMobileSet] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMobileSet(true);
    };
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile && isMobileSet;
}

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      if (typeof document !== 'undefined') {
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      }
    },
    [setOpenProp, open],
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? 'expanded' : 'collapsed';

  const contextValue = React.useMemo<SidebarContextValue>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(sidebarStyles.wrapperClass, className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        data-sidebar="sidebar"
        className={cn('flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground', className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <DrawerRoot
        open={openMobile}
        onOpenChange={(details) => setOpenMobile(details.open)}
        {...(props as DrawerRootProps)}
      >
        <DrawerBackdrop />
        <DrawerPositioner className="w-(--sidebar-width)">
          <DrawerContent
            data-sidebar="sidebar"
            data-slot="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground"
            style={{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
          >
            <DrawerTitle className="sr-only">Sidebar</DrawerTitle>
            <DrawerDescription className="sr-only">Displays the mobile sidebar.</DrawerDescription>
            <DrawerCloseTrigger className="hidden" />
            <div className="flex h-full w-full flex-col">{children}</div>
          </DrawerContent>
        </DrawerPositioner>
      </DrawerRoot>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <div
        data-slot="sidebar-gap"
        className={cn(
          sidebarStyles.gapClass,
          side === 'right' && 'rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          sidebarStyles.containerClass,
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          data-variant={variant}
          className={cn(sidebarStyles.innerClass)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({ className, onClick, children, ...props }: HTMLArkProps<'button'>) {
  const { toggleSidebar } = useSidebar();

  return (
    <ark.button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      type="button"
      aria-label="Toggle Sidebar"
      className={cn(sidebarStyles.triggerClass, className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {children}
    </ark.button>
  );
}

function SidebarRail({ className, ...props }: HTMLArkProps<'button'>) {
  const { toggleSidebar } = useSidebar();

  return (
    <ark.button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      type="button"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(sidebarStyles.railClass, className)}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: HTMLArkProps<'main'>) {
  return <ark.main data-slot="sidebar-inset" className={cn(sidebarStyles.insetClass, className)} {...props} />;
}

function SidebarInput({ className, ...props }: HTMLArkProps<'input'>) {
  return (
    <ark.input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(sidebarStyles.inputClass, className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn(sidebarStyles.headerClass, className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn(sidebarStyles.footerClass, className)}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-separator"
      data-sidebar="separator"
      role="separator"
      className={cn(sidebarStyles.separatorClass, className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(sidebarStyles.contentClass, className)}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(sidebarStyles.groupClass, className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({ className, asChild = false, ...props }: HTMLArkProps<'div'> & { asChild?: boolean }) {
  return (
    <ark.div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      asChild={asChild}
      className={cn(sidebarStyles.groupLabelClass, className)}
      {...props}
    />
  );
}

function SidebarGroupAction({ className, asChild = false, ...props }: HTMLArkProps<'button'> & { asChild?: boolean }) {
  return (
    <ark.button
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      asChild={asChild}
      type="button"
      className={cn(sidebarStyles.groupActionClass, className)}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn(sidebarStyles.groupContentClass, className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: HTMLArkProps<'ul'>) {
  return (
    <ark.ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(sidebarStyles.menuClass, className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: HTMLArkProps<'li'>) {
  return (
    <ark.li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn(sidebarStyles.menuItemClass, className)}
      {...props}
    />
  );
}

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  children,
  ...props
}: HTMLArkProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof ArkTooltipContent>;
} & React.ComponentProps<typeof sidebarMenuButtonVariants>) {
  const { isMobile, state } = useSidebar();

  const button = (
    <ark.button
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      asChild={asChild}
      type="button"
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </ark.button>
  );

  if (!tooltip || state !== 'collapsed' || isMobile) {
    return button;
  }

  const tooltipContent = typeof tooltip === 'string' ? { children: tooltip } : tooltip;

  return (
    <TooltipRoot openDelay={0} positioning={{ placement: 'right', gutter: 8 }}>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipPositioner>
        <ArkTooltipContent className={cn(sidebarStyles.tooltipContentClass)} {...tooltipContent} />
      </TooltipPositioner>
    </TooltipRoot>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: HTMLArkProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  return (
    <ark.button
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      asChild={asChild}
      type="button"
      className={cn(
        sidebarStyles.menuActionClass,
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(sidebarStyles.menuBadgeClass, className)}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({ className, showIcon = false, ...props }: HTMLArkProps<'div'> & { showIcon?: boolean }) {
  const width = React.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);

  return (
    <ark.div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(sidebarStyles.menuSkeletonClass, className)}
      {...props}
    >
      {showIcon && (
        <ark.div
          className="size-4 shrink-0 animate-pulse rounded-md bg-sidebar-accent"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <ark.div
        className="h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-sidebar-accent"
        data-sidebar="menu-skeleton-text"
        style={{ '--skeleton-width': width } as React.CSSProperties}
      />
    </ark.div>
  );
}

function SidebarMenuSub({ className, ...props }: HTMLArkProps<'ul'>) {
  return (
    <ark.ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(sidebarStyles.menuSubClass, className)}
      {...props}
    />
  );
}

function SidebarMenuSubItem({ className, ...props }: HTMLArkProps<'li'>) {
  return (
    <ark.li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn(sidebarStyles.menuSubItemClass, className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: HTMLArkProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
}) {
  return (
    <ark.a
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      asChild={asChild}
      className={cn(sidebarStyles.menuSubButtonClass, className)}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
