<!-- apps/wicn-docs/src/components/examples/navbar/scroll/svelte.svelte -->
<script lang="ts">
  import {
    Navbar,
    NavbarProvider,
    NavbarContainer,
    NavbarBrand,
    NavbarMenu,
    NavbarActions,
    NavbarTrigger,
    NavbarMobile,
    Container,
    VStack,
    NavMenuList,
    NavMenuItem,
    NavMenuTrigger,
    NavMenuContent,
    NavMenuLink,
    NavSubMenu,
    NavSubMenuTrigger,
    NavSubMenuContent,
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
  <NavbarProvider variant="scroll">
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>
          <WicnLogo class="h-7 w-auto" /><span class="text-sm font-semibold">wicn</span>
        </NavbarBrand>
        <NavbarMenu placement="center">
          <NavMenuList>
            <NavMenuItem value="docs" variant="link">
              <NavMenuTrigger>Docs</NavMenuTrigger>
              <NavMenuContent>
                <NavMenuLink href="#">Components</NavMenuLink>
                <NavMenuLink href="#">Theming</NavMenuLink>
              </NavMenuContent>
            </NavMenuItem>
            <NavMenuItem value="blog" variant="link">
              <NavMenuLink href="#">Blog</NavMenuLink>
            </NavMenuItem>
          </NavMenuList>
        </NavbarMenu>
        <NavbarActions>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-foreground">Sign in</a>
        </NavbarActions>
        <NavbarTrigger />
      </NavbarContainer>
      <NavbarMobile>
        <NavSubMenu>
          <NavSubMenuTrigger>Docs</NavSubMenuTrigger>
          <NavSubMenuContent>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Components</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Theming</a>
          </NavSubMenuContent>
        </NavSubMenu>
        <a href="#" class="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">Blog</a>
      </NavbarMobile>
    </Navbar>
    <Container class="py-6">
      <VStack class="gap-4">
        <p class="rounded-md bg-muted/50 p-4 text-sm text-muted-foreground">
          With <code>variant="scroll"</code> the bar scrolls away with the page — no sticky, no shrink.
        </p>
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
