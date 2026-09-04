import { describe, it, expect } from 'vitest';
import { cn } from '@cloudvoyant/vertex-ui';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('merges tailwind classes with tailwind-merge', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
});
