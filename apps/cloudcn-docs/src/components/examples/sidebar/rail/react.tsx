// apps/cloudcn-docs/src/components/examples/sidebar/rail/react.tsx
import { Sidebar, Container } from 'cloudcn-react';
import { Home, Inbox, Settings, LifeBuoy, PanelLeft } from 'lucide-react';

const NAV = [
  { label: 'Home', icon: Home },
  { label: 'Inbox', icon: Inbox },
  { label: 'Settings', icon: Settings },
];

export default function ReactSidebarRail() {
  return (
    <div className="relative h-[560px] rounded-lg bg-background [transform:translateZ(0)]">
      <Sidebar.Provider className="h-full min-h-0">
        <Sidebar.Root collapsible="offcanvas" className="h-full">
          <Sidebar.Header>
            <Sidebar.Menu>
              <Sidebar.MenuLink
                href="#"
                size="lg"
                icon={
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <span className="text-sm font-semibold">c</span>
                  </div>
                }
              >
                cloudcn
              </Sidebar.MenuLink>
            </Sidebar.Menu>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group label="Applications">
              <Sidebar.Menu>
                {NAV.map((item) => (
                  <Sidebar.MenuLink
                    key={item.label}
                    icon={<item.icon />}
                    tooltip={item.label}
                    isActive={item.label === 'Home'}
                  >
                    {item.label}
                  </Sidebar.MenuLink>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Sidebar.Menu>
              <Sidebar.MenuLink icon={<LifeBuoy />} tooltip="Help">
                Help
              </Sidebar.MenuLink>
            </Sidebar.Menu>
          </Sidebar.Footer>
          <Sidebar.Rail />
        </Sidebar.Root>
        <Sidebar.Inset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <Sidebar.Trigger>
              <PanelLeft />
            </Sidebar.Trigger>
            <span className="text-sm font-medium">Rail sidebar</span>
          </header>
          <Container className="flex-1 py-6">
            <p className="text-sm text-muted-foreground">
              Hover the rail handle on the sidebar edge (or use the trigger / Cmd/Ctrl+B) to collapse and expand.
            </p>
          </Container>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </div>
  );
}
