import type { Snippet } from 'svelte';
type Props = {
    variant?: 'primary' | 'secondary' | 'outline' | 'rounded' | 'success' | 'danger' | 'warn' | 'info';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children?: Snippet;
};
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
