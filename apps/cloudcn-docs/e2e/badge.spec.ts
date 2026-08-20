// apps/cloudcn-docs/e2e/badge.spec.ts
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Badge docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/components/badge');
      await selectFramework(page, framework);
    });

    test('renders the intro demo as a single default badge', async ({ page }) => {
      const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
      await expect(demo.locator('span:has-text("Badge")').first()).toHaveClass(/bg-primary\/10/);
    });

    test('variants, colors, and sizes examples are present', async ({ page }) => {
      // variants section
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Solid")`).first()).toHaveClass(/bg-primary/);
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Outline")`).first()).toHaveClass(/text-primary/);
      // colors section uses the subtle default variant
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Danger")`).first()).toHaveClass(/bg-danger\/10/);
      // sizes section
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Extra small")`).first()).toHaveClass(/text-\[10px\]/);
    });
  });
}
