<!-- apps/cloudcn-docs/src/components/examples/sidebar/icon/svelte.svelte -->
<script lang="ts">
  import { Sidebar } from 'cloudcn-svelte';
  import { House as Home, Inbox, Settings, LifeBuoy, PanelLeft } from 'lucide-svelte';

  const NAV = [
    { label: 'Home', icon: Home },
    { label: 'Inbox', icon: Inbox },
    { label: 'Settings', icon: Settings },
  ];
</script>

<div class="relative h-[560px] rounded-lg bg-background [transform:translateZ(0)]">
  <Sidebar.Provider class="h-full min-h-0">
    <Sidebar.Root collapsible="icon" class="h-full">
      <Sidebar.Header>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <span class="text-sm font-semibold">c</span>
              </div>
              <span>cloudcn</span>
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
        <Sidebar.GroupLabel>Applications</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
            <Sidebar.Menu>
              {#each NAV as item (item.label)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton tooltip={item.label} isActive={item.label === 'Home'}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton tooltip="Help">
              <LifeBuoy />
              <span>Help</span>
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>

    <Sidebar.Inset>
      <header class="flex h-12 items-center gap-2 border-b px-4">
        <Sidebar.Trigger>
          <PanelLeft />
        </Sidebar.Trigger>
          <span class="text-sm font-medium">Icon rail sidebar</span>
        </header>
        <main class="flex-1 p-6">
          <p class="text-sm text-muted-foreground">
            Click the trigger (or the rail, or press Cmd/Ctrl+B) to collapse this sidebar to an icon rail.
          </p>
        </main>
      </Sidebar.Inset>
    </Sidebar.Provider>
  </div>
