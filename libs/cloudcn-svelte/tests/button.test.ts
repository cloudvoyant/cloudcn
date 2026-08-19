// libs/cloudcn-svelte/tests/button.test.ts
import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import { createRawSnippet } from 'svelte';
import Button from '../src/Button.svelte';

const text = (value: string) =>
  createRawSnippet(() => ({
    render: () => value,
  }));

describe('Button', () => {
  it('renders a primary button by default', () => {
    const { body } = render(Button, {
      props: { children: text('Save') },
    });
    expect(body).toContain('bg-primary');
    expect(body).toContain('Save');
  });

  it('applies the danger color', () => {
    const { body } = render(Button, {
      props: { variant: 'solid', color: 'danger', children: text('Delete') },
    });
    expect(body).toContain('bg-danger');
  });

  it('renders as a button element', () => {
    const { body } = render(Button, { props: {} });
    expect(body).toContain('<button');
  });
});
