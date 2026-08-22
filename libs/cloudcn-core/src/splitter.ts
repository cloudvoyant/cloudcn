// libs/cloudcn-core/src/splitter.ts
// Source: Chakra UI Splitter slot recipe (built on @ark-ui/* splitter).
// Root/panel base classes are empty: Ark sets display/flex-direction, the
// height/width: 100% and overflow: hidden, and panel flex sizing inline.

/**
 * Intentionally empty: Ark UI sets `display`/`flex-direction` on the root and
 * the panel's `height`/`width: 100%`, `overflow`, and flex sizing inline.
 * Exported so React/Svelte wrappers share one class-merge call site; consumers
 * should pass overrides through `className` rather than reference this constant.
 */
export const splitterRootBase = '';

/**
 * Intentionally empty, for the same reason as {@link splitterRootBase}: Ark UI
 * owns the panel's box model. Kept exported to mirror `splitterRootBase`.
 */
export const splitterPanelBase = '';

export const splitterResizeTriggerBase =
  'relative grid place-items-center outline-none data-[orientation=horizontal]:-mx-1 data-[orientation=horizontal]:min-w-2 data-[orientation=vertical]:-my-1 data-[orientation=vertical]:min-h-2';

export const splitterResizeTriggerIndicatorBase =
  'relative z-10 rounded-full border bg-border shadow-xs data-[dragging]:bg-ring data-[focus]:bg-accent data-[disabled]:hidden data-[orientation=horizontal]:h-6 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-6';
