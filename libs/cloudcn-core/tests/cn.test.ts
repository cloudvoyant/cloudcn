// libs/cloudcn-core/tests/cn.test.ts
import { describe, it, expect } from 'vitest';
import { cn } from '../src/index';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('merges tailwind classes with tailwind-merge', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('filters falsy values', () => {
    expect(cn('a', false, undefined, null, 'b')).toBe('a b');
  });
});
