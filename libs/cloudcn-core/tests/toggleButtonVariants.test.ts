// libs/cloudcn-core/tests/toggleButtonVariants.test.ts
import { describe, it, expect } from 'vitest';
import { toggleButtonVariants } from 'cloudcn-core';

describe('toggleButtonVariants', () => {
  it('returns the default variant and size by default', () => {
    const classes = toggleButtonVariants();
    expect(classes).toContain('h-9');
    expect(classes).toContain('data-[state=on]:bg-accent');
  });

  it('applies the outline variant', () => {
    const classes = toggleButtonVariants({ variant: 'outline' });
    expect(classes).toContain('border-input');
  });

  it('supports sizes', () => {
    expect(toggleButtonVariants({ size: 'sm' })).toContain('h-8');
    expect(toggleButtonVariants({ size: 'lg' })).toContain('h-10');
  });
});
