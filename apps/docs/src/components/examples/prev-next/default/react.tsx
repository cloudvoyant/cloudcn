// apps/docs/src/components/examples/prev-next/default/react.tsx
import { PrevNext } from '@cloudvoyant/helix-react';

export default function ReactPrevNextDefault() {
  return (
    <PrevNext
      prev={{ title: 'Introduction', href: '/general/introduction' }}
      next={{ title: 'Theming', href: '/general/theming' }}
    />
  );
}
