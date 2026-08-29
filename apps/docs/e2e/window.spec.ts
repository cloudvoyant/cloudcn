// apps/docs/e2e/window.spec.ts
// Behavior + accessibility coverage for Window: opens on click, shows a
// labelled title, and dismisses via the close button.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Window docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/window');
      await selectFramework(page, framework);
    });

    test('opens on click', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Window")`).first();
      await trigger.click();
      const panel = page.locator('[data-scope="floating-panel"][data-part="content"]:visible').first();
      await expect(panel).toBeVisible();
      await expect(panel).toHaveAttribute('data-state', 'open');
    });

    test('shows a titled header', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Window")`).first();
      await trigger.click();
      const panel = page.locator('[data-scope="floating-panel"][data-part="content"]:visible').first();
      await expect(panel.locator('[data-part="title"]').first()).toBeVisible();
      await expect(panel.locator('[data-part="title"]').first()).toHaveText('Window');
    });

    test('dismisses via the close button', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Open Window")`).first();
      await trigger.click();
      const panel = page.locator('[data-scope="floating-panel"][data-part="content"]:visible').first();
      await expect(panel).toBeVisible();
      await panel.locator('button[aria-label="Close"]').click();
      await expect(panel).toBeHidden();
    });
  });
}
