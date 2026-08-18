// libs/cloudcn-core/tests/buttonVariants.test.ts
import { describe, it, expect } from 'vitest';
import { buttonVariants } from '../src/index';

describe('buttonVariants', () => {
  it('returns primary + md classes by default', () => {
    const classes = buttonVariants();
    expect(classes).toContain('bg-primary');
    expect(classes).toContain('h-10');
  });

  it('supports every documented variant', () => {
    const variants = ['rounded', 'outline', 'success', 'danger', 'warn', 'info', 'primary', 'secondary'] as const;
    for (const variant of variants) {
      expect(buttonVariants({ variant })).toContain('text-');
    }
  });

  it('supports sizes', () => {
    expect(buttonVariants({ size: 'sm' })).toContain('h-9');
    expect(buttonVariants({ size: 'lg' })).toContain('h-11');
    expect(buttonVariants({ size: 'icon' })).toContain('size-10');
  });
});
