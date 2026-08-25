// apps/wicn-docs/src/components/examples/navbar/floating/react.tsx
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
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from 'wicn-react';

const CONTENT = [
  ['About', 'A brief history of wicn and its guiding principles.'],
  ['Installation', 'Add wicn to your Astro, Vite, or framework project.'],
  ['Components', 'Every component, demoed and documented for React and Svelte.'],
  ['Theming', 'Light and dark themes over the shadcn token model.'],
  ['Accessibility', "Roles, focus, and keyboard behavior come from Ark's state machine."],
  ['Roadmap', 'What is coming next — from drawers to tours.'],
];

export default function ReactNavbarFloating() {
  return (
    <div className="relative h-[420px] overflow-y-auto overscroll-y-contain rounded-md bg-background">
      <NavbarProvider>
        <Navbar variant="floating" className="sticky top-4 z-30">
          <NavbarContainer>
            <NavbarBrand>
              <span className="text-sm font-semibold">wicn</span>
            </NavbarBrand>
            <NavbarMenu placement="left">
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
            </NavbarMenu>
            <NavbarActions>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Sign in
              </a>
            </NavbarActions>
            <NavbarTrigger />
          </NavbarContainer>
          <NavbarMobile>
            <VStack className="gap-2 px-4 py-4">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                Components
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                Blog
              </a>
            </VStack>
          </NavbarMobile>
        </Navbar>
        <Container className="py-6 pt-20">
          <VStack className="gap-4">
            {CONTENT.map(([title, body]) => (
              <div key={title} className="rounded-md border border-border p-4">
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </VStack>
        </Container>
      </NavbarProvider>
    </div>
  );
}
