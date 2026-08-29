// apps/docs/e2e/tooltip.spec.ts
// Behavior + accessibility coverage for Tooltip: appears on hover/focus with a
// tooltip role, and dismisses on Escape and when hover leaves the trigger.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Tooltip docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/tooltip');
      await selectFramework(page, framework);
    });

    test('appears on focus with a tooltip role', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Hover me")`).first();
      await trigger.focus();
      const tooltip = page.locator('[role="tooltip"]:visible').first();
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveAttribute('data-state', 'open');
    });

    test('dismisses on Escape', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Hover me")`).first();
      await trigger.focus();
      const tooltip = page.locator('[role="tooltip"]:visible').first();
      await expect(tooltip).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(tooltip).toBeHidden();
    });

    test('hides when hover leaves the trigger', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Hover me")`).first();
      await trigger.hover();
      const tooltip = page.locator('[role="tooltip"]:visible').first();
      await expect(tooltip).toBeVisible();
      await page.mouse.move(10, 10);
      await expect(tooltip).toBeHidden();
    });
  });
}
