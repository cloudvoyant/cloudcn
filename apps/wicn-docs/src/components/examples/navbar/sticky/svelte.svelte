<!-- apps/wicn-docs/src/components/examples/navbar/sticky/svelte.svelte -->
<script lang="ts">
  import { Navbar, VStack, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from 'wicn-svelte';
</script>

<Navbar.Provider>
  <Navbar.Root variant="sticky">
    <Navbar.Container>
      <Navbar.Brand>
        <span class="text-sm font-semibold">wicn</span>
      </Navbar.Brand>
      <Navbar.Menu placement="center">
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
</Navbar.Provider>
