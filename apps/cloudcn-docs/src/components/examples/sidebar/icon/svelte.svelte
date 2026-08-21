<!-- apps/cloudcn-docs/src/components/examples/sidebar/icon/svelte.svelte -->
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
    SidebarFooter,
    SidebarRail,
    SidebarTrigger,
    SidebarInset,
  } from 'cloudcn-svelte';
  import { House as Home, Inbox, Settings, LifeBuoy } from 'lucide-svelte';

  const NAV = [
    { label: 'Home', icon: Home },
    { label: 'Inbox', icon: Inbox },
    { label: 'Settings', icon: Settings },
  ];
</script>

<div class="relative h-[560px] rounded-lg bg-background [transform:translateZ(0)]">
  <SidebarProvider class="h-full min-h-0">
    <Sidebar collapsible="icon" class="h-full">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
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
                  <SidebarMenuButton tooltip={item.label} isActive={item.label === 'Home'}>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              {/each}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Help">
              <LifeBuoy />
              <span>Help</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <header class="flex h-12 items-center gap-2 border-b px-4">
        <SidebarTrigger>
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
        </SidebarTrigger>
        <span class="text-sm font-medium">Icon rail sidebar</span>
      </header>
      <main class="flex-1 p-6">
        <p class="text-sm text-muted-foreground">
          Click the trigger (or the rail, or press Cmd/Ctrl+B) to collapse this sidebar to an icon rail.
        </p>
      </main>
    </SidebarInset>
  </SidebarProvider>
</div>
