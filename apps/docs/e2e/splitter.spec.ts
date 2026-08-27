// apps/docs/e2e/splitter.spec.ts
// Behavior + accessibility coverage for the Splitter, matrixed over React and
// Svelte: panels render, the resize handle is a role="separator" button with
// aria-orientation, and keyboard resizing updates aria-valuenow.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Splitter docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/splitter');
      await selectFramework(page, framework);
    });

    test('renders panels and a separator resize trigger', async ({ page }) => {
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("A")`).first()).toBeVisible();
      const trigger = page.locator(`[data-fw="${framework}"] [role="separator"]`).first();
      await expect(trigger).toBeVisible();
      await expect(trigger).toHaveAttribute('aria-orientation', 'horizontal');
    });

    test('keyboard resizing updates aria-valuenow', async ({ page }) => {
      const trigger = page.locator(`[data-fw="${framework}"] [role="separator"]`).first();
      const before = await trigger.getAttribute('aria-valuenow');
      await trigger.focus();
      await page.keyboard.press('ArrowRight');
      await expect(async () => {
        const after = await trigger.getAttribute('aria-valuenow');
        expect(after).not.toBe(before);
      }).toPass();
    });

    test('shows a divider line between panels', async ({ page }) => {
      const separator = page.locator(`[data-fw="${framework}"] [data-part="separator"]`).first();
      await expect(separator).toBeVisible();
      const bg = await separator.evaluate((el) => getComputedStyle(el).backgroundColor);
      expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    });
  });
}
