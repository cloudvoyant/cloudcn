// apps/docs/e2e/popover.spec.ts
// Behavior + accessibility coverage for Popover: opens on click with a dialog
// role, and dismisses on Escape and via the dismiss button.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Popover docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/popover');
      await selectFramework(page, framework);
    });

    test('opens on click with a dialog role', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Popover")`).first();
      await trigger.click();
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toBeVisible();
      await expect(dialog).toHaveAttribute('data-state', 'open');
    });

    test('dismisses on Escape', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Popover")`).first();
      await trigger.click();
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(dialog).toBeHidden();
    });

    test('dismisses via the dismiss button', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Popover")`).first();
      await trigger.click();
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toBeVisible();
      await dialog.locator('button[aria-label="Close"]').click();
      await expect(dialog).toBeHidden();
    });
  });
}
