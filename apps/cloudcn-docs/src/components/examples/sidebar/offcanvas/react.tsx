// apps/cloudcn-docs/src/components/examples/sidebar/offcanvas/react.tsx
import { Sidebar } from 'cloudcn-react';
import { Home, Inbox, Settings, PanelLeft } from 'lucide-react';

const NAV = [
  { label: 'Home', icon: Home },
  { label: 'Inbox', icon: Inbox },
  { label: 'Settings', icon: Settings },
];

export default function ReactSidebarOffcanvas() {
  return (
    <div className="relative h-[560px] rounded-lg bg-background [transform:translateZ(0)]">
      <Sidebar.Provider className="h-full min-h-0">
        <Sidebar.Root collapsible="offcanvas" className="h-full">
          <Sidebar.Header>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <span className="text-sm font-semibold">c</span>
                    </div>
                    <span>cloudcn</span>
                  </a>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Applications</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  {NAV.map((item) => (
                    <Sidebar.MenuItem key={item.label}>
                      <Sidebar.MenuButton isActive={item.label === 'Home'}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  ))}
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          </Sidebar.Content>
        </Sidebar.Root>
        <Sidebar.Inset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <Sidebar.Trigger>
              <PanelLeft />
            </Sidebar.Trigger>
            <span className="text-sm font-medium">Offcanvas sidebar</span>
          </header>
          <main className="flex-1 p-6">
            <p className="text-sm text-muted-foreground">
              Click the trigger (or press Cmd/Ctrl+B) to completely hide this sidebar off-screen.
            </p>
          </main>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </div>
  );
}
