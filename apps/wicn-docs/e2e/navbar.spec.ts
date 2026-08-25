// apps/wicn-docs/e2e/navbar.spec.ts
// Behavior + accessibility coverage for the Navbar, matrixed over React and Svelte
// via the docs demo islands: the mobile trigger toggles the disclosure panel,
// the desktop menu is keyboard navigable, and scrolling marks the sticky bar.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  // Both navbar demos now live in a self-scrolling container. These tests only
  // exercise the sticky example, so hide the second (floating) example to keep
  // the framework selector and locators unambiguous.
  await page.locator('[data-example]').nth(1).evaluate((el) => (el.style.display = 'none'));
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Navbar docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/navbar');
      await selectFramework(page, framework);
    });

    test('renders a header with brand and menu links', async ({ page }) => {
      const header = page.locator(`[data-demo] [data-fw="${framework}"] header`).first();
      await expect(header).toBeVisible();
      await expect(header.locator('text=wicn').first()).toBeVisible();
    });

    test('mobile trigger toggles the mobile panel', async ({ page }) => {
      // The trigger is md:hidden — exercise the disclosure at a mobile viewport.
      await page.setViewportSize({ width: 375, height: 667 });
      const trigger = page.locator(`[data-demo] [data-fw="${framework}"] [data-slot="navbar-trigger"]`).first();
      const panel = page.locator(`[data-demo] [data-fw="${framework}"] [data-slot="navbar-mobile"]`).first();
      await expect(trigger).toBeVisible();
      await trigger.click();
      const mobileLink = panel.locator('a:has-text("Components")').first();
      await expect(mobileLink).toBeVisible();
      await trigger.click();
      await expect(mobileLink).toBeHidden();
    });

    test('desktop menu dropdown opens on keyboard', async ({ page }) => {
      const menu = page.locator(`[data-demo] [data-fw="${framework}"] [data-slot="navbar-menu"]`).first();
      const trigger = menu.locator('button:has-text("Docs")').first();
      const panelLink = menu.locator('a:has-text("Components")').first();
      await expect(async () => {
        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(panelLink).toBeVisible();
      }).toPass();
      await page.keyboard.press('Escape');
      await expect(panelLink).toBeHidden();
    });

    test('sticky bar stays pinned and marks data-scrolled on container scroll', async ({ page }) => {
      const header = page.locator(`[data-demo] [data-fw="${framework}"] header[data-slot="navbar"]`).first();
      await header.scrollIntoViewIfNeeded();
      const pinned = await header.evaluate((el) => {
        // Find the demo's scroll container (overflow-y-auto ancestor).
        let c: HTMLElement | null = el.parentElement;
        while (c && !/auto|scroll|overlay/.test(getComputedStyle(c).overflowY)) c = c.parentElement;
        if (!c) return { scrollable: false };
        c.scrollTop = 160;
        return { scrollable: true, position: getComputedStyle(el).position };
      });
      expect(pinned.scrollable).toBe(true);
      expect(['sticky', 'fixed']).toContain(pinned.position);
      await expect(async () => {
        await expect(header).toHaveAttribute('data-scrolled', 'true');
      }).toPass();
      await header.evaluate((el) => {
        let c: HTMLElement | null = el.parentElement;
        while (c && !/auto|scroll|overlay/.test(getComputedStyle(c).overflowY)) c = c.parentElement;
        if (c) c.scrollTop = 0;
      });
    });
  });
}
