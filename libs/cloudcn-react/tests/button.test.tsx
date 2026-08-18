// libs/cloudcn-react/tests/button.test.tsx
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../src/index';

describe('Button', () => {
  it('renders a primary button by default', () => {
    const html = renderToStaticMarkup(<Button>Save</Button>);
    expect(html).toContain('bg-primary');
    expect(html).toContain('>Save<');
  });

  it('applies the danger variant', () => {
    const html = renderToStaticMarkup(<Button variant="danger">Delete</Button>);
    expect(html).toContain('bg-danger');
  });

  it('renders as a button element with type=button by default', () => {
    const html = renderToStaticMarkup(<Button>Go</Button>);
    expect(html).toMatch(/<button type="button"/);
  });

  it('merges a custom className', () => {
    const html = renderToStaticMarkup(<Button className="my-class">Go</Button>);
    expect(html).toContain('my-class');
  });
});
