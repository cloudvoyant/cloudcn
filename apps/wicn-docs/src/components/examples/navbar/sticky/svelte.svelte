<!-- apps/wicn-docs/src/components/examples/navbar/sticky/svelte.svelte -->
<script lang="ts">
  import {
    Navbar,
    NavbarProvider,
    NavbarContainer,
    NavbarBrand,
    NavbarMenu,
    NavbarTrigger,
    NavbarMobile,
    Container,
    VStack,
    NavMenuList,
    NavMenuItem,
    NavMenuTrigger,
    NavMenuContent,
    NavMenuLink,
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
    <Navbar variant="sticky" class="z-30">
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
            <NavMenuItem value="signin" variant="link">
              <NavMenuLink href="#">Sign in</NavMenuLink>
            </NavMenuItem>
          </NavMenuList>
        </NavbarMenu>
        <NavbarTrigger />
      </NavbarContainer>
      <NavbarMobile>
        <VStack class="gap-2 px-4 py-4">
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">Components</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">Blog</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">Sign in</a>
        </VStack>
      </NavbarMobile>
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
