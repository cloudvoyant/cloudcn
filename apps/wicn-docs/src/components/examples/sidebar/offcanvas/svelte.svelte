<!-- apps/wicn-docs/src/components/examples/sidebar/offcanvas/svelte.svelte -->
<script lang="ts">
  import { Sidebar, Container } from 'wicn-svelte';
  import { House as Home, Inbox, Settings } from 'lucide-svelte';

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
          {#snippet logoIcon()}
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <span class="text-sm font-semibold">c</span>
            </div>
          {/snippet}
          <Sidebar.MenuLink href="#" size="lg" icon={logoIcon}>
            wicn
          </Sidebar.MenuLink>
        </Sidebar.Menu>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group label="Applications">
          <Sidebar.Menu>
            {#each NAV as item (item.label)}
              {#snippet itemIcon()}
                <item.icon />
              {/snippet}
              <Sidebar.MenuLink icon={itemIcon} isActive={item.label === 'Home'}>
                {item.label}
              </Sidebar.MenuLink>
            {/each}
          </Sidebar.Menu>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar.Root>

    <Sidebar.Inset>
      <header class="flex h-12 items-center gap-2 border-b px-4">
        <Sidebar.Trigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /></svg
          >
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
