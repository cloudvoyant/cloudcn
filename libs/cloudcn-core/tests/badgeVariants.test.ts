// libs/cloudcn-core/tests/badgeVariants.test.ts
import { describe, it, expect } from 'vitest';
import { badgeVariants } from 'cloudcn-core';

describe('badgeVariants', () => {
  it('returns the default subtle badge', () => {
    const classes = badgeVariants();
    expect(classes).toContain('bg-primary/10');
    expect(classes).toContain('text-primary');
  });

  it('supports every variant', () => {
    const variants = ['solid', 'subtle', 'outline', 'surface', 'plain'] as const;
    for (const variant of variants) {
      expect(badgeVariants({ variant })).toContain('inline-flex');
    }
  });

  it('supports every button color', () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warn', 'info'] as const;
    for (const color of colors) {
      expect(badgeVariants({ color })).toContain('inline-flex');
    }
  });

  it('applies the solid variant', () => {
    expect(badgeVariants({ variant: 'solid' })).toContain('bg-primary');
    expect(badgeVariants({ variant: 'solid' })).toContain('text-primary-foreground');
  });

  it('applies the outline variant without a fill', () => {
    const classes = badgeVariants({ variant: 'outline' });
    expect(classes).not.toContain('bg-primary');
    expect(classes).toContain('border-primary/40');
  });

  it('applies size variants', () => {
    expect(badgeVariants({ size: 'xs' })).toContain('text-[10px]');
    expect(badgeVariants({ size: 'lg' })).toContain('text-sm');
  });
});
