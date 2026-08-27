// apps/wicn-docs/src/lib/nav.ts
// Shared docs navigation groups. Consumed by both the Shell layout (TopNav
// mobile menu) and the Sidebar (left docs nav) so the ordering never drifts.
export interface NavGroup {
  label: string;
  section: 'general' | 'components';
  group: string;
}

export const NAV_GROUPS: NavGroup[] = [
  { label: 'General', section: 'general', group: '' },
  { label: 'Layouts', section: 'components', group: 'layouts' },
  { label: 'Nav', section: 'components', group: 'navigation' },
  { label: 'Buttons', section: 'components', group: 'buttons' },
  { label: 'Positioning', section: 'components', group: 'pos' },
  { label: 'Misc', section: 'components', group: 'misc' },
];
