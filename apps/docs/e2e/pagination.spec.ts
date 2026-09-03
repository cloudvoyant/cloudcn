// apps/docs/e2e/pagination.spec.ts
// Behavior + accessibility coverage for the Pagination, matrixed over React and
// Svelte via the docs demo islands: page items render, the current page carries
// data-selected, prev/next navigate, and the controlled example updates its label.
import { selectFramework } from './helpers';
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Pagination docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/pagination');
      await selectFramework(page, framework);
    });

    test('renders page items with the current page marked', async ({ page }) => {
      const item = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("1")`).first();
      await expect(item).toBeVisible();
      await expect(item).toHaveAttribute('data-selected', '');
    });

    test('navigates with Next and Previous', async ({ page }) => {
      const next = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Next")`).first();
      const prev = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Previous")`).first();
      await expect(async () => {
        await next.click();
        await expect(page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("2")`).first()).toHaveAttribute(
          'data-selected',
          '',
        );
      }).toPass();
      await expect(async () => {
        await prev.click();
        await expect(page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("1")`).first()).toHaveAttribute(
          'data-selected',
          '',
        );
      }).toPass();
    });

    test('controlled example updates its page label', async ({ page }) => {
      const next = page
        .locator('[data-example-id="controlled"]')
        .locator(`[data-fw="${framework}"] button:has-text("Next")`)
        .first();
      const label = page
        .locator('[data-example-id="controlled"]')
        .locator(`[data-fw="${framework}"] p:has-text("Page")`)
        .first();
      await expect(async () => {
        await next.click();
        await expect(label).toHaveText('Page 3 of 12');
      }).toPass();
    });
  });
}
