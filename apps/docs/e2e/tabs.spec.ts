// apps/docs/e2e/tabs.spec.ts
// Behavior + accessibility coverage for the Tabs, matrixed over React and Svelte
// via the docs demo islands: role=tab with aria-selected, click + arrow-key
// switching, and content panel visibility.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Tabs docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/tabs');
      await selectFramework(page, framework);
    });

    test('renders tablist with role=tab and an initially selected tab', async ({ page }) => {
      const profile = page.locator(`[data-demo] [data-fw="${framework}"] [role="tab"]:has-text("Profile")`).first();
      await expect(profile).toHaveAttribute('role', 'tab');
      await expect(profile).toHaveAttribute('aria-selected', 'true');
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] [role="tabpanel"]:has-text("Profile content")`).first()).toBeVisible();
    });

    test('switches tabs on click', async ({ page }) => {
      const profile = page.locator(`[data-demo] [data-fw="${framework}"] [role="tab"]:has-text("Profile")`).first();
      const settings = page.locator(`[data-demo] [data-fw="${framework}"] [role="tab"]:has-text("Settings")`).first();
      await expect(async () => {
        await settings.click();
        await expect(settings).toHaveAttribute('aria-selected', 'true');
        await expect(profile).toHaveAttribute('aria-selected', 'false');
      }).toPass();
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] [role="tabpanel"]:has-text("Settings content")`).first()).toBeVisible();
    });

    test('switches tabs with arrow keys', async ({ page }) => {
      const profile = page.locator(`[data-demo] [data-fw="${framework}"] [role="tab"]:has-text("Profile")`).first();
      const settings = page.locator(`[data-demo] [data-fw="${framework}"] [role="tab"]:has-text("Settings")`).first();
      await expect(async () => {
        await profile.focus();
        await page.keyboard.press('ArrowRight');
        await expect(settings).toHaveAttribute('aria-selected', 'true');
      }).toPass();
    });

    test('underline variant renders tabs with the underline style', async ({ page }) => {
      const account = page.locator(`[data-example]`).nth(1).locator(`[data-fw="${framework}"] [role="tab"]:has-text("Account")`).first();
      await expect(account).toHaveAttribute('role', 'tab');
      await expect(account).toHaveAttribute('aria-selected', 'true');
    });
  });
}
