<!-- apps/wicn-docs/src/components/examples/navbar/floating/svelte.svelte -->
<script lang="ts">
  import {
    Navbar,
    Container,
    VStack,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
  } from 'wicn-svelte';

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
  <Navbar.Provider>
    <Navbar.Root variant="floating" class="sticky top-4 z-30">
      <Navbar.Container>
        <Navbar.Brand>
          <span class="text-sm font-semibold">wicn</span>
        </Navbar.Brand>
        <Navbar.Menu placement="left">
          <NavigationMenuList>
            <NavigationMenuItem value="docs">
              <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Components</NavigationMenuLink>
                <NavigationMenuLink href="#">Theming</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="blog">
              <NavigationMenuLink href="#">Blog</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </Navbar.Menu>
        <Navbar.Actions>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-foreground">Sign in</a>
        </Navbar.Actions>
        <Navbar.Trigger />
      </Navbar.Container>
      <Navbar.Mobile>
        <VStack class="gap-2 px-4 py-4">
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">Components</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">Blog</a>
        </VStack>
      </Navbar.Mobile>
    </Navbar.Root>
    <Container class="py-6 pt-20">
      <VStack class="gap-4">
        {#each CONTENT as [title, body] (title)}
          <div class="rounded-md border border-border p-4">
            <p class="text-sm font-medium">{title}</p>
            <p class="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>
        {/each}
      </VStack>
    </Container>
  </Navbar.Provider>
</div>
