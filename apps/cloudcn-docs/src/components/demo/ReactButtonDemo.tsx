// apps/cloudcn-docs/src/components/demo/ReactButtonDemo.tsx
import { Button } from 'cloudcn-react';

const VARIANTS = ['rounded', 'outline', 'success', 'danger', 'warn', 'info', 'primary', 'secondary'] as const;
const SIZES = ['sm', 'md', 'lg', 'icon'] as const;

export default function ReactButtonDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {SIZES.map((size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}
