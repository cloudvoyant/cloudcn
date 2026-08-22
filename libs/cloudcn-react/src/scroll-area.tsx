// libs/cloudcn-react/src/scroll-area.tsx
// Source: @ark-ui/react/scroll-area (Ark UI), Chakra UI ScrollArea
import {
  ScrollAreaRoot as ArkScrollAreaRoot,
  ScrollAreaViewport as ArkScrollAreaViewport,
  ScrollAreaContent as ArkScrollAreaContent,
  ScrollAreaScrollbar as ArkScrollAreaScrollbar,
  ScrollAreaThumb as ArkScrollAreaThumb,
  ScrollAreaCorner as ArkScrollAreaCorner,
  type ScrollAreaRootProps,
  type ScrollAreaViewportProps,
  type ScrollAreaContentProps,
  type ScrollAreaScrollbarProps,
  type ScrollAreaThumbProps,
  type ScrollAreaCornerProps,
} from '@ark-ui/react/scroll-area';
import {
  scrollAreaRootBase,
  scrollAreaViewportBase,
  scrollAreaContentBase,
  scrollAreaScrollbarBase,
  scrollAreaThumbBase,
  scrollAreaCornerBase,
  cn,
} from 'cloudcn-core';

export function ScrollAreaRoot({ className, ...props }: ScrollAreaRootProps) {
  return <ArkScrollAreaRoot className={cn(scrollAreaRootBase, className)} {...props} />;
}

export function ScrollAreaViewport({ className, ...props }: ScrollAreaViewportProps) {
  return <ArkScrollAreaViewport className={cn(scrollAreaViewportBase, className)} {...props} />;
}

export function ScrollAreaContent({ className, ...props }: ScrollAreaContentProps) {
  return <ArkScrollAreaContent className={cn(scrollAreaContentBase, className)} {...props} />;
}

export function ScrollAreaScrollbar({ className, ...props }: ScrollAreaScrollbarProps) {
  return <ArkScrollAreaScrollbar className={cn(scrollAreaScrollbarBase, className)} {...props} />;
}

export function ScrollAreaThumb({ className, ...props }: ScrollAreaThumbProps) {
  return <ArkScrollAreaThumb className={cn(scrollAreaThumbBase, className)} {...props} />;
}

export function ScrollAreaCorner({ className, ...props }: ScrollAreaCornerProps) {
  return <ArkScrollAreaCorner className={cn(scrollAreaCornerBase, className)} {...props} />;
}

export const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Content: ScrollAreaContent,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
};

export type {
  ScrollAreaRootProps,
  ScrollAreaViewportProps,
  ScrollAreaContentProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaCornerProps,
};
