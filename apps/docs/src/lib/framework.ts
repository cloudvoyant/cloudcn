// apps/docs/src/lib/framework.ts
export type Framework = 'react' | 'svelte';

const STORAGE_KEY = 'vortex:framework';
export const FRAMEWORK_EVENT = 'vortex:framework';

export function getStoredFramework(): Framework {
  if (typeof localStorage === 'undefined') return 'react';
  return localStorage.getItem(STORAGE_KEY) === 'svelte' ? 'svelte' : 'react';
}

export function setFramework(framework: Framework): Framework {
  document.documentElement.dataset.framework = framework;
  localStorage.setItem(STORAGE_KEY, framework);
  window.dispatchEvent(new CustomEvent(FRAMEWORK_EVENT, { detail: framework }));
  return framework;
}
