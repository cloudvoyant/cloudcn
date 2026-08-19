// libs/cloudcn-tests/src/render.ts
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from 'svelte/server';
import { createRawSnippet } from 'svelte';
import type { ButtonProps as ReactButtonProps } from 'cloudcn-react';
import { Button as ReactButton } from 'cloudcn-react';
import { Button as SvelteButton } from 'cloudcn-svelte';

export interface ButtonRenderProps {
  variant?: 'solid' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warn' | 'info';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  disabled?: boolean;
  className?: string;
  label?: string;
}

export interface FrameworkRender {
  name: 'react' | 'svelte';
  renderButton: (props: ButtonRenderProps) => string;
}

const svelteText = (value: string) =>
  createRawSnippet(() => ({
    render: () => value,
  }));

export const frameworks: FrameworkRender[] = [
  {
    name: 'react',
    renderButton: (props) =>
      renderToStaticMarkup(
        <ReactButton
          variant={props.variant}
          color={props.color}
          size={props.size}
          disabled={props.disabled}
          className={props.className}
        >
          {props.label ?? 'Button'}
        </ReactButton>,
      ),
  },
  {
    name: 'svelte',
    renderButton: (props) =>
      render(SvelteButton, {
        props: {
          variant: props.variant,
          color: props.color,
          size: props.size,
          disabled: props.disabled,
          class: props.className,
          children: svelteText(props.label ?? 'Button'),
        },
      }).body,
  },
];

export type { ReactButtonProps };
