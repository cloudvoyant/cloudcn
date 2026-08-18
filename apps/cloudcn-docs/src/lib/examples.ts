// apps/cloudcn-docs/src/lib/examples.ts
export type ButtonSection = 'solid' | 'outline' | 'rounded' | 'sizes' | 'icon' | 'with-icon' | 'disabled';

export interface ExampleCode {
  react: string;
  svelte: string;
}

export interface ButtonExample {
  id: ButtonSection;
  title: string;
  code: ExampleCode;
}

export const buttonExamples: ButtonExample[] = [
  {
    id: 'solid',
    title: 'Solid',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warn">Warn</Button>
<Button variant="info">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warn">Warn</Button>
<Button variant="info">Info</Button>`,
    },
  },
  {
    id: 'outline',
    title: 'Outline',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-danger">Danger</Button>
<Button variant="outline-warn">Warn</Button>
<Button variant="outline-info">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-danger">Danger</Button>
<Button variant="outline-warn">Warn</Button>
<Button variant="outline-info">Info</Button>`,
    },
  },
  {
    id: 'rounded',
    title: 'Rounded',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button variant="primary" className="rounded-full">Primary</Button>
<Button variant="secondary" className="rounded-full">Secondary</Button>
<Button variant="success" className="rounded-full">Success</Button>
<Button variant="danger" className="rounded-full">Danger</Button>
<Button variant="warn" className="rounded-full">Warn</Button>
<Button variant="info" className="rounded-full">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button variant="primary" class="rounded-full">Primary</Button>
<Button variant="secondary" class="rounded-full">Secondary</Button>
<Button variant="success" class="rounded-full">Success</Button>
<Button variant="danger" class="rounded-full">Danger</Button>
<Button variant="warn" class="rounded-full">Warn</Button>
<Button variant="info" class="rounded-full">Info</Button>`,
    },
  },
  {
    id: 'sizes',
    title: 'Sizes',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
    },
  },
  {
    id: 'icon',
    title: 'Icon button',
    code: {
      react: `import { Button } from 'cloudcn-react';
import { Plus } from 'lucide-react';

<Button size="icon" className="rounded-full" aria-label="Add">
  <Plus className="size-4" />
</Button>
<Button size="icon" variant="outline" aria-label="Add">
  <Plus className="size-4" />
</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
  import { Plus } from 'lucide-svelte';
</script>

<Button size="icon" class="rounded-full" aria-label="Add">
  <Plus class="size-4" />
</Button>
<Button size="icon" variant="outline" aria-label="Add">
  <Plus class="size-4" />
</Button>`,
    },
  },
  {
    id: 'with-icon',
    title: 'With icon',
    code: {
      react: `import { Button } from 'cloudcn-react';
import { Check, Trash2, AlertTriangle, Info, Plus, Download } from 'lucide-react';

<Button variant="success"><Check className="size-4" />Approve</Button>
<Button variant="danger"><Trash2 className="size-4" />Delete</Button>
<Button variant="warn"><AlertTriangle className="size-4" />Warn</Button>
<Button variant="info"><Info className="size-4" />Info</Button>
<Button><Plus className="size-4" />Add</Button>
<Button variant="secondary"><Download className="size-4" />Export</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
  import { Check, Trash2, AlertTriangle, Info, Plus, Download } from 'lucide-svelte';
</script>

<Button variant="success"><Check class="size-4" />Approve</Button>
<Button variant="danger"><Trash2 class="size-4" />Delete</Button>
<Button variant="warn"><AlertTriangle class="size-4" />Warn</Button>
<Button variant="info"><Info class="size-4" />Info</Button>
<Button><Plus class="size-4" />Add</Button>
<Button variant="secondary"><Download class="size-4" />Export</Button>`,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="success" disabled>Success</Button>
<Button variant="danger" disabled>Danger</Button>
<Button variant="warn" disabled>Warn</Button>
<Button variant="info" disabled>Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="success" disabled>Success</Button>
<Button variant="danger" disabled>Danger</Button>
<Button variant="warn" disabled>Warn</Button>
<Button variant="info" disabled>Info</Button>`,
    },
  },
];

export function getButtonExample(id: string): ButtonExample {
  const example = buttonExamples.find((e) => e.id === id);
  if (!example) throw new Error(`Unknown button example: ${id}`);
  return example;
}
