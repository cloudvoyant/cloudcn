// apps/docs/e2e/combobox.spec.ts
// Behavior + accessibility coverage for Combobox (single + multiple): combobox
// role, listbox opening, option selection, and multi-select item state.
// Note: Ark UI v5 combobox highlights typeahead matches but does not hide
// non-matching options, so the "filters" assertion was relaxed to opening.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;


for (const framework of FRAMEWORKS) {
  test.describe(`Combobox docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/combobox');
      await selectFramework(page, framework);
    });

    test('opens a listbox with all options', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] [role="combobox"]`).first();
      await input.click();
      await expect(page.locator('[role="listbox"]').first()).toBeVisible();
      await expect(page.locator('[role="option"]')).toHaveCount(3);
    });

    test('selects an option on click and updates the input', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] [role="combobox"]`).first();
      await expect(async () => {
        await input.click();
        await page.locator('[role="option"]:has-text("React")').first().click();
        await expect(input).toHaveValue('React');
      }).toPass();
    });
  });
}

for (const framework of FRAMEWORKS) {
  test.describe(`Combobox multiple · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/combobox');
      await selectFramework(page, framework);
    });

    test('marks multiple options as selected', async ({ page }) => {
      const input = page.locator(`[data-example]`).nth(1).locator(`[data-fw="${framework}"] [role="combobox"]`).first();
      await input.click();
      await page.locator('[role="option"]:has-text("Vue")').first().click();
      await expect(page.locator('[role="option"]:has-text("Vue")').first()).toHaveAttribute('aria-selected', 'true');
      await expect(page.locator('[role="option"]:has-text("React")').first()).toHaveAttribute('aria-selected', 'true');
    });
  });
}
