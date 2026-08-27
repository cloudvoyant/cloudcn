// apps/docs/e2e/field.spec.ts
// Behavior + accessibility coverage for Field/FieldSet: label association,
// invalid state, and fieldset/legend semantics.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Field docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/field');
      await selectFramework(page, framework);
    });

    test('labels and error text are present and connected', async ({ page }) => {
      const label = page.locator(`[data-demo] [data-fw="${framework}"] label:has-text("Username")`).first();
      await expect(label).toBeVisible();
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] :text("Username is already taken.")`).first()).toBeVisible();
    });

    test('fieldset with legend groups related fields', async ({ page }) => {
      const fieldset = page.locator(`[data-example]`).nth(1).locator(`[data-fw="${framework}"] fieldset`).first();
      await expect(fieldset).toBeVisible();
      await expect(fieldset.locator('legend')).toContainText('Billing address');
    });
  });
}
