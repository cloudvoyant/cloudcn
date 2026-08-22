// apps/cloudcn-docs/e2e/helpers.ts
// Shared Playwright helpers for the docs demo islands: the framework selector
// wiring is defined once here so layout, scroll-area, and splitter specs stay
// in sync with any change to the selector markup.
import { expect, type Page } from '@playwright/test';

export const FRAMEWORKS = ['react', 'svelte'] as const;
export type Framework = (typeof FRAMEWORKS)[number];

export async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}
