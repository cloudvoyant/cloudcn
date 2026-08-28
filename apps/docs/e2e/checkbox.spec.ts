// apps/docs/e2e/checkbox.spec.ts
// Behavior + accessibility coverage for Checkbox: native hidden input, checked
// state toggling via mouse and Space key. Ark UI v5 renders the checkbox as a
// <label> plus a native hidden <input type="checkbox">.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Checkbox docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/checkbox');
      await selectFramework(page, framework);
    });

    test('renders a checkbox with initial checked state', async ({ page }) => {
      const box = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).first();
      await expect(box).toBeChecked();
    });

    test('toggles checked state on click', async ({ page }) => {
      const box = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).nth(1);
      const root = page
        .locator(`[data-demo] [data-fw="${framework}"] [data-scope="checkbox"][data-part="root"]`)
        .nth(1);
      await expect(box).not.toBeChecked();
      await expect(async () => {
        await root.click();
        await expect(box).toBeChecked();
      }).toPass();
    });

    test('toggles with the Space key', async ({ page }) => {
      const box = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).nth(1);
      await expect(async () => {
        await box.focus();
        await page.keyboard.press('Space');
        await expect(box).toBeChecked();
      }).toPass();
    });
  });

  test.describe(`Checkbox controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/checkbox');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);

      await expect(demo.locator('output[data-testid="value"]')).toHaveText('true');
      await demo.locator('label').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('false');
      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('true');
    });
  });
}
