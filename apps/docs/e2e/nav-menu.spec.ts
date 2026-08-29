// apps/docs/e2e/nav-menu.spec.ts
// Behavior + accessibility coverage for the NavbarMenu (the Navbar's menu),
// matrixed over React and Svelte via the navbar docs page: native nav/menu
// roles, hover + keyboard trigger activation, dropdown panel visibility, and
// link rendering.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

// The "Menu dropdowns" example (Platform/Company triggers) exercises the
// NavbarMenu dropdown behavior. Hide the other navbar examples so the framework
// selector and locators stay unambiguous and the sticky/fixed bars don't overlap.
async function isolateDropdownExample(page: Page) {
  const example = page.locator('[data-example]').filter({ hasText: 'Platform' });
  await expect(example).toBeVisible();
  const count = await page.locator('[data-example]').count();
  for (let i = 0; i < count; i++) {
    const el = page.locator('[data-example]').nth(i);
    const isTarget = await el.evaluate((n) => n.textContent?.includes('Platform'));
    if (!isTarget) await el.evaluate((n) => (n.style.display = 'none'));
  }
  return example;
}

for (const framework of FRAMEWORKS) {
  test.describe(`NavbarMenu (navbar page) · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/navbar');
      await selectFramework(page, framework);
    });

    test('renders a navigation landmark with menu item buttons', async ({ page }) => {
      const example = await isolateDropdownExample(page);
      const nav = example.locator(`[data-fw="${framework}"] nav`).first();
      await expect(nav).toBeVisible();
      await expect(nav.locator('button:has-text("Platform")').first()).toBeVisible();
    });

    test('opens a dropdown panel on trigger hover', async ({ page }) => {
      const example = await isolateDropdownExample(page);
      const trigger = example.locator(`[data-fw="${framework}"] button:has-text("Platform")`).first();
      const panel = example.locator(`[data-fw="${framework}"] a:has-text("Analytics")`).first();
      const viewport = example.locator(`[data-fw="${framework}"] [data-part="viewport"]`).first();
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
      const example = await isolateDropdownExample(page);
      const trigger = example.locator(`[data-fw="${framework}"] button:has-text("Platform")`).first();
      const panel = example.locator(`[data-fw="${framework}"] a:has-text("Analytics")`).first();
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
