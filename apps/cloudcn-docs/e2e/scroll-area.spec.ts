// apps/cloudcn-docs/e2e/scroll-area.spec.ts
// Behavior coverage for the ScrollArea, matrixed over React and Svelte: it
// renders scrollable content and an Ark scrollbar thumb (data-part="thumb").
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`ScrollArea docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/components/scroll-area');
      await selectFramework(page, framework);
    });

    test('renders scrollable content', async ({ page }) => {
      const tag = page.locator(`[data-fw="${framework}"] div:has-text("v1.2.0-beta.")`).first();
      await expect(tag).toBeVisible();
    });

    test('renders a scrollbar thumb when content overflows', async ({ page }) => {
      const thumb = page.locator(`[data-fw="${framework}"] [data-part="thumb"]`).first();
      await expect(thumb).toBeVisible();
    });
  });
}
