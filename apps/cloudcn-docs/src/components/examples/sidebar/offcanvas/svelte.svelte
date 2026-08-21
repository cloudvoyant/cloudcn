<!-- apps/cloudcn-docs/src/components/examples/sidebar/offcanvas/svelte.svelte -->
<script lang="ts">
  import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger,
    SidebarInset,
  } from 'cloudcn-svelte';
  import { House as Home, Inbox, Settings } from 'lucide-svelte';

  const NAV = [
    { label: 'Home', icon: Home },
    { label: 'Inbox', icon: Inbox },
    { label: 'Settings', icon: Settings },
  ];
</script>

<SidebarProvider>
  <Sidebar collapsible="offcanvas">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <span class="text-sm font-semibold">c</span>
            </div>
            <span>cloudcn</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Applications</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {#each NAV as item (item.label)}
              <SidebarMenuItem>
                <SidebarMenuButton isActive={item.label === 'Home'}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            {/each}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>

  <SidebarInset>
    <header class="flex h-12 items-center gap-2 border-b px-4">
      <SidebarTrigger>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /></svg>
      </SidebarTrigger>
      <span class="text-sm font-medium">Offcanvas sidebar</span>
    </header>
    <main class="flex-1 p-6">
      <p class="text-sm text-muted-foreground">
        Click the trigger (or press Cmd/Ctrl+B) to completely hide this sidebar off-screen.
      </p>
    </main>
  </SidebarInset>
</SidebarProvider>
