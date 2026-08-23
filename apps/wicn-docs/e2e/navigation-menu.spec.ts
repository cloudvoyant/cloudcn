// apps/wicn-docs/e2e/navigation-menu.spec.ts
// Behavior + accessibility coverage for the NavigationMenu, matrixed over React
// and Svelte via the docs demo islands: native nav/menu roles, hover + keyboard
// trigger activation, dropdown panel visibility, and link rendering.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`NavigationMenu docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/navigation-menu');
      await selectFramework(page, framework);
    });

    test('renders a navigation landmark with menu item buttons', async ({ page }) => {
      const nav = page.locator(`[data-demo] [data-fw="${framework}"] nav`).first();
      await expect(nav).toBeVisible();
      await expect(nav.locator('a:has-text("Docs")').first()).toBeVisible();
    });

    test('opens a dropdown panel on trigger hover', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Getting Started")`).first();
      const panel = page.locator(`[data-demo] [data-fw="${framework}"] a:has-text("Installation")`).first();
      await expect(async () => {
        await trigger.hover();
        await expect(panel).toBeVisible();
      }).toPass();
    });

    test('opens the dropdown with keyboard and closes with Escape', async ({ page }) => {
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Getting Started")`).first();
      const panel = page.locator(`[data-demo] [data-fw="${framework}"] a:has-text("Installation")`).first();
      await expect(async () => {
        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(panel).toBeVisible();
      }).toPass();
      await page.keyboard.press('Escape');
      await expect(panel).toBeHidden();
    });
  });
}
