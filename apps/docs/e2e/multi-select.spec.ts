// apps/docs/e2e/multi-select.spec.ts
// Behavior + accessibility coverage for MultiSelect (single + multiple): multi-select
// role, listbox opening, option selection, and multi-select item state.
// Note: Ark UI v5 multi-select highlights typeahead matches but does not hide
// non-matching options, so the "filters" assertion was relaxed to opening.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`MultiSelect docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/multi-select');
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
  test.describe(`MultiSelect multiple · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/multi-select');
      await selectFramework(page, framework);
    });

    test('marks multiple options as selected', async ({ page }) => {
      const input = page.locator(`[data-example="multiple"] [data-fw="${framework}"] [role="combobox"]`).first();
      await input.click();
      await page.locator('[role="option"]:has-text("Vue")').first().click();
      await expect(page.locator('[role="option"]:has-text("Vue")').first()).toHaveAttribute('aria-selected', 'true');
      await expect(page.locator('[role="option"]:has-text("React")').first()).toHaveAttribute('aria-selected', 'true');
    });
  });
}

for (const framework of FRAMEWORKS) {
  test.describe(`MultiSelect controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/multi-select');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);

      await expect(demo.locator('output[data-testid="value"]')).toHaveText('react');
      await demo.locator('[role="combobox"]').click();
      await page.locator('[role="listbox"]:visible [role="option"]', { hasText: 'Vue' }).click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('react, vue');
      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('react');
    });
  });
}
