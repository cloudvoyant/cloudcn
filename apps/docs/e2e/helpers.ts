// Shared e2e helpers: framework matrix + robust framework selection.
// The docs hide the inactive framework's islands via `html[data-framework]`
// CSS. The selector sets `data-ready` once hydrated, so we wait for it before
// clicking, then confirm `aria-pressed` applied before asserting a visible demo.
import { expect, type Page } from '@playwright/test';

export const FRAMEWORKS = ['react', 'svelte'] as const;
export type Framework = (typeof FRAMEWORKS)[number];

export async function selectFramework(page: Page, framework: Framework) {
  await page.locator('[data-framework-selector][data-ready]').waitFor();
  const button = page.locator(`[data-framework-selector] button[data-fw="${framework}"]`);
  await button.click();
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]:visible`).first();
  await expect(demo).toBeVisible();
}
