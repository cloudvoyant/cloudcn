// apps/cloudcn-docs/e2e/badge.spec.ts
// Behavior + accessibility coverage for the Badge, matrixed over React and
// Svelte via the docs demo islands: renders as a non-interactive span (no
// button role, no focusability) and renders its content across variants.
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

    test('renders as a non-interactive span', async ({ page }) => {
      const badge = page.locator(`[data-demo] [data-fw="${framework}"] span:has-text("Badge")`).first();
      await expect(badge).toBeVisible();
      expect(await badge.evaluate((el) => el.tagName)).toBe('SPAN');
      await expect(badge).not.toHaveAttribute('role');
      await expect(badge).not.toHaveAttribute('tabindex');
    });

    test('renders variant, color, and size content', async ({ page }) => {
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Solid")`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Outline")`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Danger")`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] span:has-text("Extra small")`).first()).toBeVisible();
    });
  });
}
