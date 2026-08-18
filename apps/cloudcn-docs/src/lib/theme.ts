// apps/cloudcn-docs/src/lib/theme.ts
export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'cloudcn:theme';

export function getStoredTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'light';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): Theme {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  return theme;
}
