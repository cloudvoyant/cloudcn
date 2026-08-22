<!-- apps/cloudcn-docs/src/components/examples/sidebar/offcanvas/svelte.svelte -->
<script lang="ts">
  import { Sidebar, Container } from 'cloudcn-svelte';
  import { House as Home, Inbox, Settings, PanelLeft } from 'lucide-svelte';

  const NAV = [
    { label: 'Home', icon: Home },
    { label: 'Inbox', icon: Inbox },
    { label: 'Settings', icon: Settings },
  ];
</script>

<div class="relative h-[560px] rounded-lg bg-background [transform:translateZ(0)]">
  <Sidebar.Provider class="h-full min-h-0">
    <Sidebar.Root collapsible="offcanvas" class="h-full">
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
                  <Sidebar.MenuButton isActive={item.label === 'Home'}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar.Root>

    <Sidebar.Inset>
      <header class="flex h-12 items-center gap-2 border-b px-4">
        <Sidebar.Trigger>
          <PanelLeft />
        </Sidebar.Trigger>
        <span class="text-sm font-medium">Offcanvas sidebar</span>
      </header>
      <Container class="flex-1 py-6">
        <p class="text-sm text-muted-foreground">
          Click the trigger (or press Cmd/Ctrl+B) to completely hide this sidebar off-screen.
        </p>
      </Container>
    </Sidebar.Inset>
  </Sidebar.Provider>
</div>
