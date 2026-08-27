<!-- apps/wicn-docs/src/components/examples/navbar/sticky/svelte.svelte -->
<script lang="ts">
  import {
    Navbar,
    NavbarProvider,
    NavbarBrand,
    NavbarMenu,
    NavbarActions,
    NavbarTrigger,
    NavbarMobileOverlay,
    Container,
    VStack,
    NavbarMenuList,
    NavbarMenuItem,
    NavbarMenuTrigger,
    NavbarMenuContent,
    NavbarMenuLink,
    NavbarMobileMenu,
    NavbarMobileMenuTrigger,
    NavbarMobileMenuContent,
  } from 'wicn-svelte';
  import WicnLogo from '../../WicnLogo.svelte';

  const CONTENT: [string, string][] = [
    ['About', 'A brief history of wicn and its guiding principles.'],
    ['Installation', 'Add wicn to your Astro, Vite, or framework project.'],
    ['Components', 'Every component, demoed and documented for React and Svelte.'],
    ['Theming', 'Light and dark themes over the shadcn token model.'],
    ['Accessibility', "Roles, focus, and keyboard behavior come from Ark's state machine."],
    ['Roadmap', 'What is coming next — from drawers to tours.'],
  ];
</script>

<div class="relative h-[420px] overflow-y-auto overscroll-y-contain rounded-md bg-background">
  <NavbarProvider>
    <Navbar class="z-30">
        <NavbarBrand>
          <WicnLogo class="h-7 w-auto" /><span class="text-sm font-semibold">wicn</span>
        </NavbarBrand>
        <NavbarMenu placement="center">
          <NavbarMenuList>
            <NavbarMenuItem value="docs" variant="link">
              <NavbarMenuTrigger>Docs</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="#">Components</NavbarMenuLink>
                <NavbarMenuLink href="#">Theming</NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenuItem>
            <NavbarMenuItem value="blog" variant="link">
              <NavbarMenuLink href="#">Blog</NavbarMenuLink>
            </NavbarMenuItem>
          </NavbarMenuList>
        </NavbarMenu>
        <NavbarActions>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-foreground">Sign in</a>
        </NavbarActions>
        <NavbarTrigger />
      <NavbarMobileOverlay>
        <NavbarMobileMenu>
          <NavbarMobileMenuTrigger>Docs</NavbarMobileMenuTrigger>
          <NavbarMobileMenuContent>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Components</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Theming</a>
          </NavbarMobileMenuContent>
        </NavbarMobileMenu>
        <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Blog</a>
      </NavbarMobileOverlay>
    </Navbar>
    <Container class="py-6">
      <VStack class="gap-4">
        {#each CONTENT as [title, body] (title)}
          <div class="rounded-md border border-border p-4">
            <p class="text-sm font-medium">{title}</p>
            <p class="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>
        {/each}
      </VStack>
    </Container>
  </NavbarProvider>
</div>
