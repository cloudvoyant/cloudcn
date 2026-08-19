// apps/cloudcn-docs/src/components/demo/ReactButtonDemo.tsx
import { Button } from 'cloudcn-react';
import { Plus, Download, Trash2, Check, AlertTriangle, Info as InfoIcon } from 'lucide-react';

const COLORS = [
  { name: 'Primary', color: 'primary' },
  { name: 'Secondary', color: 'secondary' },
  { name: 'Success', color: 'success' },
  { name: 'Danger', color: 'danger' },
  { name: 'Warn', color: 'warn' },
  { name: 'Info', color: 'info' },
] as const;

export interface ReactButtonDemoProps {
  section: 'solid' | 'outline' | 'rounded' | 'sizes' | 'icon' | 'with-icon' | 'disabled';
}

export default function ReactButtonDemo({ section }: ReactButtonDemoProps) {
  switch (section) {
    case 'solid':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {COLORS.map(({ name, color }) => (
            <Button key={color} color={color}>
              {name}
            </Button>
          ))}
        </div>
      );
    case 'outline':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {COLORS.map(({ name, color }) => (
            <Button key={color} variant="outline" color={color}>
              {name}
            </Button>
          ))}
        </div>
      );
    case 'rounded':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {COLORS.map(({ name, color }) => (
            <Button key={color} color={color} className="rounded-full">
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
          <Button color="success">
            <Check className="size-4" />
            Approve
          </Button>
          <Button color="danger">
            <Trash2 className="size-4" />
            Delete
          </Button>
          <Button color="warn">
            <AlertTriangle className="size-4" />
            Warn
          </Button>
          <Button color="info">
            <InfoIcon className="size-4" />
            Info
          </Button>
          <Button>
            <Plus className="size-4" />
            Add
          </Button>
          <Button color="secondary">
            <Download className="size-4" />
            Export
          </Button>
        </div>
      );
    case 'disabled':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {COLORS.map(({ name, color }) => (
            <Button key={color} color={color} disabled>
              {name}
            </Button>
          ))}
        </div>
      );
  }
}
