// apps/docs/e2e/center.spec.ts
// Behavior coverage for the Center primitive, matrixed over React and Svelte
// via the docs demo islands: it renders as a non-interactive flex div.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Center docs page · ${framework}`, () => {
    test('renders centered content in a plain div', async ({ page }) => {
      await page.goto('components/center');
      await selectFramework(page, framework);
      const box = page
        .locator(`[data-demo] [data-fw="${framework}"] div:has-text("This will be centered")`)
        .first();
      await expect(box).toBeVisible();
      expect(await box.evaluate((el) => el.tagName)).toBe('DIV');
      expect(await box.evaluate((el) => getComputedStyle(el).display)).toBe('flex');
    });
  });
}
