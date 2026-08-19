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

<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button color="warn">Warn</Button>
<Button color="info">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button color="warn">Warn</Button>
<Button color="info">Info</Button>`,
    },
  },
  {
    id: 'outline',
    title: 'Outline',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="danger">Danger</Button>
<Button variant="outline" color="warn">Warn</Button>
<Button variant="outline" color="info">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="danger">Danger</Button>
<Button variant="outline" color="warn">Warn</Button>
<Button variant="outline" color="info">Info</Button>`,
    },
  },
  {
    id: 'rounded',
    title: 'Rounded',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button color="primary" className="rounded-full">Primary</Button>
<Button color="secondary" className="rounded-full">Secondary</Button>
<Button color="success" className="rounded-full">Success</Button>
<Button color="danger" className="rounded-full">Danger</Button>
<Button color="warn" className="rounded-full">Warn</Button>
<Button color="info" className="rounded-full">Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button color="primary" class="rounded-full">Primary</Button>
<Button color="secondary" class="rounded-full">Secondary</Button>
<Button color="success" class="rounded-full">Success</Button>
<Button color="danger" class="rounded-full">Danger</Button>
<Button color="warn" class="rounded-full">Warn</Button>
<Button color="info" class="rounded-full">Info</Button>`,
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

<Button color="success"><Check className="size-4" />Approve</Button>
<Button color="danger"><Trash2 className="size-4" />Delete</Button>
<Button color="warn"><AlertTriangle className="size-4" />Warn</Button>
<Button color="info"><Info className="size-4" />Info</Button>
<Button><Plus className="size-4" />Add</Button>
<Button color="secondary"><Download className="size-4" />Export</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
  import { Check, Trash2, AlertTriangle, Info, Plus, Download } from 'lucide-svelte';
</script>

<Button color="success"><Check class="size-4" />Approve</Button>
<Button color="danger"><Trash2 class="size-4" />Delete</Button>
<Button color="warn"><AlertTriangle class="size-4" />Warn</Button>
<Button color="info"><Info class="size-4" />Info</Button>
<Button><Plus class="size-4" />Add</Button>
<Button color="secondary"><Download class="size-4" />Export</Button>`,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    code: {
      react: `import { Button } from 'cloudcn-react';

<Button color="primary" disabled>Primary</Button>
<Button color="secondary" disabled>Secondary</Button>
<Button color="success" disabled>Success</Button>
<Button color="danger" disabled>Danger</Button>
<Button color="warn" disabled>Warn</Button>
<Button color="info" disabled>Info</Button>`,
      svelte: `<script lang="ts">
  import { Button } from 'cloudcn-svelte';
</script>

<Button color="primary" disabled>Primary</Button>
<Button color="secondary" disabled>Secondary</Button>
<Button color="success" disabled>Success</Button>
<Button color="danger" disabled>Danger</Button>
<Button color="warn" disabled>Warn</Button>
<Button color="info" disabled>Info</Button>`,
    },
  },
];

export function getButtonExample(id: string): ButtonExample {
  const example = buttonExamples.find((e) => e.id === id);
  if (!example) throw new Error(`Unknown button example: ${id}`);
  return example;
}
