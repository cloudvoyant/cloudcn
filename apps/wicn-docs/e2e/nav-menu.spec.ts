// apps/wicn-docs/e2e/nav-menu.spec.ts
// Behavior + accessibility coverage for the NavMenu, matrixed over React
// and Svelte via the docs demo islands: native nav/menu roles, hover + keyboard
// trigger activation, dropdown panel visibility, and link rendering.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator('[data-framework-selector][data-ready]').waitFor();
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`NavMenu docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/nav-menu');
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
      const viewport = page.locator(`[data-demo] [data-fw="${framework}"] [data-part="viewport"]`).first();
      await expect(async () => {
        await trigger.hover();
        await expect(panel).toBeVisible();
      }).toPass();
      // Regression: content must render INSIDE the viewport — if it is positioned
      // below it, the viewport's overflow-hidden clips it and the text is invisible.
      // Assert the panel's top aligns with the viewport's top (tolerating the 1px
      // border inset), not its bottom. Poll because the viewport height animates.
      await expect
        .poll(async () => {
          const vp = await viewport.boundingBox();
          const pb = await panel.boundingBox();
          return Boolean(vp && pb && pb.y >= vp.y - 4 && pb.y < vp.y + vp.height / 2);
        })
        .toBe(true);
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
