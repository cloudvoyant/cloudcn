// apps/wicn-docs/src/components/examples/navbar/shrink/react.tsx
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
} from 'wicn-react';
import { WicnLogo } from '../../WicnLogo';

const CONTENT = [
  ['About', 'A brief history of wicn and its guiding principles.'],
  ['Installation', 'Add wicn to your Astro, Vite, or framework project.'],
  ['Components', 'Every component, demoed and documented for React and Svelte.'],
  ['Theming', 'Light and dark themes over the shadcn token model.'],
  ['Accessibility', "Roles, focus, and keyboard behavior come from Ark's state machine."],
  ['Roadmap', 'What is coming next — from drawers to tours.'],
];

export default function ReactNavbarShrink() {
  return (
    <div className="relative h-[420px] overflow-y-auto overscroll-y-contain rounded-md bg-background">
      <NavbarProvider density="shrink-on-scroll">
        <Navbar variant="sticky" className="z-30">
          <NavbarContainer>
            <NavbarBrand>
              <WicnLogo className="h-7 w-auto" />
              <span className="text-sm font-semibold">wicn</span>
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
            <VStack className="gap-2 px-4 py-4">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                Components
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                Blog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                Sign in
              </a>
            </VStack>
          </NavbarMobile>
        </Navbar>
        <Container className="py-6">
          <VStack className="gap-4">
            <p className="rounded-md bg-muted/50 p-4 text-sm text-muted-foreground">
              Scroll to see the bar shrink — with <code>density="shrink-on-scroll"</code> the height drops and spacing
              compacts once you pass 24px.
            </p>
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
