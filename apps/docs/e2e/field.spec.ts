// apps/docs/e2e/field.spec.ts
// Behavior + accessibility coverage for Field and FieldGroup: label
// association, invalid state, controlled sync, and fieldset/legend semantics.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Field docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/field');
      await selectFramework(page, framework);
    });

    test('labels and error text are present and connected', async ({ page }) => {
      const label = page.locator(`[data-demo] [data-fw="${framework}"] label:has-text("Username")`).first();
      await expect(label).toBeVisible();
      await expect(
        page.locator(`[data-demo] [data-fw="${framework}"] :text("Pick something memorable.")`).first(),
      ).toBeVisible();
    });
  });

  test.describe(`Field controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/field');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const input = demo.locator('input').first();

      await input.fill('controlled value');
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('controlled value');

      await demo.locator('button[data-testid="reset"]').click();
      await expect(input).toHaveValue('initial');
    });
  });

  test.describe(`FieldGroup docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/field-group');
      await selectFramework(page, framework);
    });

    test('renders legend + focus order, no tab trap', async ({ page }) => {
      const demo = page.locator(`[data-example="default"] [data-fw="${framework}"]`);

      await expect(demo.locator('legend')).toHaveText('Newsletter preferences');

      const boxes = demo.locator('input[type="checkbox"]');
      await expect(boxes).toHaveCount(2);
      await boxes.first().focus();
      await expect(boxes.first()).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(boxes.nth(1)).toBeFocused();

      await page.keyboard.press('Space');
      await expect(boxes.nth(1)).toBeChecked();
    });
  });
}
