// libs/cloudcn-tests/tests/button-matrix.test.ts
import { describe, it, expect } from 'vitest';
import { buttonVariants } from 'cloudcn-core';
import { frameworks } from '../src/render';

const VARIANTS = ['solid', 'outline', 'text'] as const;
const COLORS = ['primary', 'secondary', 'success', 'danger', 'warn', 'info'] as const;
const SIZES = ['sm', 'md', 'lg', 'icon'] as const;

describe('Button matrix', () => {
  for (const framework of frameworks) {
    describe(framework.name, () => {
      it('renders a solid button by default', () => {
        const html = framework.renderButton({});
        expect(html).toContain('bg-primary');
        expect(html).toContain('text-primary-foreground');
        expect(html).toContain('>Button<');
      });

      it('renders every variant/color combination with the shared classes', () => {
        for (const variant of VARIANTS) {
          for (const color of COLORS) {
            const html = framework.renderButton({ variant, color });
            const expected = buttonVariants({ variant, color, size: 'md' });
            for (const cls of expected.split(/\s+/).filter(Boolean)) {
              expect(html).toContain(cls);
            }
          }
        }
      });

      it('renders every size', () => {
        for (const size of SIZES) {
          const html = framework.renderButton({ size });
          const expected = buttonVariants({ variant: 'solid', color: 'primary', size });
          for (const cls of expected.split(/\s+/).filter(Boolean)) {
            expect(html).toContain(cls);
          }
        }
      });

      it('renders as a button element', () => {
        const html = framework.renderButton({});
        expect(html).toMatch(/<button/);
      });

      it('honours disabled', () => {
        const html = framework.renderButton({ disabled: true });
        expect(html).toMatch(/disabled/);
      });

      it('merges a custom class', () => {
        const html = framework.renderButton({ className: 'my-custom' });
        expect(html).toContain('my-custom');
      });
    });
  }
});
