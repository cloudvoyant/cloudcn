// apps/wicn-docs/src/components/examples/navbar/sticky/react.tsx
import {
  Navbar,
  VStack,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from 'wicn-react';

export default function ReactNavbarSticky() {
  return (
    <Navbar.Provider>
      <Navbar.Root variant="sticky">
        <Navbar.Container>
          <Navbar.Brand>
            <span className="text-sm font-semibold">wicn</span>
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
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sign in
            </a>
          </Navbar.Actions>
          <Navbar.Trigger />
        </Navbar.Container>
        <Navbar.Mobile>
          <VStack className="gap-2 px-4 py-4">
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              Components
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              Blog
            </a>
          </VStack>
        </Navbar.Mobile>
      </Navbar.Root>
    </Navbar.Provider>
  );
}
