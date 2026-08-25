<!-- apps/wicn-docs/src/components/examples/navigation-menu/two-columns/svelte.svelte -->
<script lang="ts">
  import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    Row,
    Col,
  } from 'wicn-svelte';

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
</script>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="getting-started">
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Row class="w-[300px] grid grid-cols-1 gap-3 p-4 md:w-[420px] md:grid-cols-2">
          {#each gettingStarted as link (link.title)}
            <NavigationMenuLink href={link.href}>
              <span class="text-sm font-medium leading-none">{link.title}</span>
              <span class="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</span>
            </NavigationMenuLink>
          {/each}
        </Row>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem value="resources">
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Row class="w-[300px] grid grid-cols-1 gap-3 p-4 md:w-[520px] md:grid-cols-[0.75fr_1fr]">
          <Col class="row-span-3 justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
            <span class="text-base font-medium">wicn</span>
            <p class="mt-1 text-sm leading-tight text-muted-foreground">
              A React + Svelte component library built on Ark UI, with a shared framework-agnostic core.
            </p>
          </Col>
          {#each resources as link (link.title)}
            <NavigationMenuLink href={link.href}>
              <span class="text-sm font-medium leading-none">{link.title}</span>
              <span class="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</span>
            </NavigationMenuLink>
          {/each}
        </Row>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem value="docs">
      <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
