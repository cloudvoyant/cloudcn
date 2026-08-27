// apps/docs/e2e/toggle-button.spec.ts
// Behavior + accessibility coverage for the ToggleButton, matrixed over React
// and Svelte via the docs demo islands: native button role with `aria-pressed`,
// mouse/keyboard state toggling, accessible labels on icon-only toggles, and
// indicator content swapping.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`ToggleButton docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/toggle-button');
      await selectFramework(page, framework);
    });

    test('renders a native toggle button with aria-pressed state', async ({ page }) => {
      const toggle = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Bold")`).first();
      await expect(toggle).toBeVisible();
      expect(await toggle.evaluate((el) => el.tagName)).toBe('BUTTON');
      await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    });

    test('toggles aria-pressed on click', async ({ page }) => {
      const toggle = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Bold")`).first();
      // retry covers island hydration timing
      await expect(async () => {
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-pressed', 'true');
      }).toPass();
      await expect(async () => {
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
      }).toPass();
    });

    test('toggles aria-pressed with the Enter and Space keys', async ({ page }) => {
      const toggle = page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("Bold")`).first();
      await expect(async () => {
        await toggle.focus();
        await page.keyboard.press('Enter');
        await expect(toggle).toHaveAttribute('aria-pressed', 'true');
      }).toPass();
      await expect(async () => {
        await page.keyboard.press('Space');
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
      }).toPass();
    });

    test('icon-only toggles carry an accessible label', async ({ page }) => {
      await expect(page.locator(`[data-fw="${framework}"] button[aria-label="Toggle bold"]`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] button[aria-label="Toggle italic"]`).first()).toBeVisible();
    });

    test('indicator swaps between pressed and fallback content on toggle', async ({ page }) => {
      const toggle = page.locator(`[data-fw="${framework}"] button[aria-label="Toggle bookmark"]`).first();
      await expect(toggle).toHaveAttribute('aria-pressed', 'true');
      // pressed state renders the filled icon (children)
      await expect(toggle.locator('svg[fill="currentColor"]')).toBeVisible();
      // clicking swaps to the fallback (outline) icon; retry covers hydration timing
      await expect(async () => {
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
      }).toPass();
      await expect(toggle.locator('svg[fill="currentColor"]')).toBeHidden();
    });
  });
}
