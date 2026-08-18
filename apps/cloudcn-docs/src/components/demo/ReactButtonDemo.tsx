// apps/cloudcn-docs/src/components/demo/ReactButtonDemo.tsx
import { Button } from 'cloudcn-react';
import { Plus, Download, Trash2, Check, AlertTriangle, Info as InfoIcon } from 'lucide-react';

const SOLID = [
  { name: 'Primary', variant: 'primary' },
  { name: 'Secondary', variant: 'secondary' },
  { name: 'Success', variant: 'success' },
  { name: 'Danger', variant: 'danger' },
  { name: 'Warn', variant: 'warn' },
  { name: 'Info', variant: 'info' },
] as const;

const OUTLINE = [
  { name: 'Primary', variant: 'outline-primary' },
  { name: 'Secondary', variant: 'outline-secondary' },
  { name: 'Success', variant: 'outline-success' },
  { name: 'Danger', variant: 'outline-danger' },
  { name: 'Warn', variant: 'outline-warn' },
  { name: 'Info', variant: 'outline-info' },
] as const;

export interface ReactButtonDemoProps {
  section: 'solid' | 'outline' | 'rounded' | 'sizes' | 'icon' | 'with-icon' | 'disabled';
}

export default function ReactButtonDemo({ section }: ReactButtonDemoProps) {
  switch (section) {
    case 'solid':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {SOLID.map(({ name, variant }) => (
            <Button key={variant} variant={variant}>
              {name}
            </Button>
          ))}
        </div>
      );
    case 'outline':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {OUTLINE.map(({ name, variant }) => (
            <Button key={variant} variant={variant}>
              {name}
            </Button>
          ))}
        </div>
      );
    case 'rounded':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {SOLID.map(({ name, variant }) => (
            <Button key={variant} variant={variant} className="rounded-full">
              {name}
            </Button>
          ))}
        </div>
      );
    case 'sizes':
      return (
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      );
    case 'icon':
      return (
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" className="rounded-full" aria-label="Add">
            <Plus className="size-4" />
          </Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <Plus className="size-4" />
          </Button>
        </div>
      );
    case 'with-icon':
      return (
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="success">
            <Check className="size-4" />
            Approve
          </Button>
          <Button variant="danger">
            <Trash2 className="size-4" />
            Delete
          </Button>
          <Button variant="warn">
            <AlertTriangle className="size-4" />
            Warn
          </Button>
          <Button variant="info">
            <InfoIcon className="size-4" />
            Info
          </Button>
          <Button>
            <Plus className="size-4" />
            Add
          </Button>
          <Button variant="secondary">
            <Download className="size-4" />
            Export
          </Button>
        </div>
      );
    case 'disabled':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {SOLID.map(({ name, variant }) => (
            <Button key={variant} variant={variant} disabled>
              {name}
            </Button>
          ))}
        </div>
      );
  }
}
