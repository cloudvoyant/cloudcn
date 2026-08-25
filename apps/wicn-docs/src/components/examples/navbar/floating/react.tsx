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
  NavMenuList,
  NavMenuItem,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuLink,
  NavSubMenu,
  NavSubMenuTrigger,
  NavSubMenuContent,
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

export default function ReactNavbarFloating() {
  return (
    <div className="relative h-[420px] overflow-y-auto overscroll-y-contain rounded-md bg-background">
      <NavbarProvider variant="shrink" floating>
        <Navbar className="sticky top-4 z-30">
          <NavbarContainer>
            <NavbarBrand>
              <WicnLogo className="h-7 w-auto" />
              <span className="text-sm font-semibold">wicn</span>
            </NavbarBrand>
            <NavbarMenu placement="left">
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
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Sign in
              </a>
            </NavbarActions>
            <NavbarTrigger />
          </NavbarContainer>
          <NavbarMobile>
            <NavSubMenu>
              <NavSubMenuTrigger>Docs</NavSubMenuTrigger>
              <NavSubMenuContent>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  Components
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  Theming
                </a>
              </NavSubMenuContent>
            </NavSubMenu>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              Blog
            </a>
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
