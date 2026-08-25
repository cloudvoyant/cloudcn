// apps/wicn-docs/src/components/examples/nav-menu/two-columns/react.tsx
import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink, Row, Col } from 'wicn-react';

const gettingStarted = [
  { title: 'Introduction', description: 'Rebuilt components with accessible markup, in React and Svelte.', href: '#' },
  { title: 'Installation', description: 'Add wicn to your Astro, Vite, or framework project.', href: '#' },
  { title: 'Typography', description: 'Type scale, headings, and inline text styles.', href: '#' },
  { title: 'Theming', description: 'Light and dark themes over the shadcn token model.', href: '#' },
];

const resources = [
  { title: 'Why wicn?', description: 'Layout primitives, shared cva, and thin Ark wrappers.', href: '#' },
  { title: 'Packages', description: 'wicn-core, wicn-react, and wicn-svelte.', href: '#' },
  { title: 'Components', description: 'Every component, demoed and documented.', href: '#' },
];

function MenuLink({ title, description, href }: (typeof gettingStarted)[number]) {
  return (
    <NavMenuLink href={href}>
      <span className="text-sm font-medium leading-none">{title}</span>
      <span className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</span>
    </NavMenuLink>
  );
}

export default function ReactNavMenuTwoColumns() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="getting-started">
          <NavMenuTrigger>Getting Started</NavMenuTrigger>
          <NavMenuContent>
            <Row className="w-[300px] grid grid-cols-1 gap-3 p-4 md:w-[420px] md:grid-cols-2">
              {gettingStarted.map((link) => (
                <MenuLink key={link.title} {...link} />
              ))}
            </Row>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="resources">
          <NavMenuTrigger>Resources</NavMenuTrigger>
          <NavMenuContent>
            <Row className="w-[300px] grid grid-cols-1 gap-3 p-4 md:w-[520px] md:grid-cols-[0.75fr_1fr]">
              <Col className="row-span-3 justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
                <span className="text-base font-medium">wicn</span>
                <p className="mt-1 text-sm leading-tight text-muted-foreground">
                  A React + Svelte component library built on Ark UI, with a shared framework-agnostic core.
                </p>
              </Col>
              {resources.map((link) => (
                <MenuLink key={link.title} {...link} />
              ))}
            </Row>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="docs">
          <NavMenuLink href="#">Documentation</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  );
}
