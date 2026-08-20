// apps/cloudcn-docs/e2e/toggle-button.spec.ts
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
      await page.goto('/components/toggle-button');
      await selectFramework(page, framework);
    });

    test('renders the intro toggle with the accent-on state', async ({ page }) => {
      const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
      const toggle = demo.locator('button:has-text("Bold")').first();
      await expect(toggle).toBeVisible();
      await expect(toggle).toHaveClass(/data-\[state=on\]:bg-accent/);
    });

    test('outline and icon examples are present in the Examples section', async ({ page }) => {
      const outline = page.locator('[data-fw="' + framework + '"] button:has-text("Italic")').first();
      await expect(outline).toBeVisible();
      await expect(outline).toHaveClass(/border-input/);
      // icon example has an aria-label, not text
      const icon = page.locator(`[data-fw="${framework}"] button[aria-label="Toggle bold"]`).first();
      await expect(icon).toBeVisible();
    });

    test('indicator example swaps between filled and fallback icon on toggle', async ({ page }) => {
      const toggle = page.locator(`[data-fw="${framework}"] button[aria-label="Toggle bookmark"]`).first();
      await expect(toggle).toBeVisible();
      await expect(toggle).toHaveAttribute('aria-pressed', 'true');
      // pressed state renders the filled icon (children)
      await expect(toggle.locator('svg[fill="currentColor"]')).toBeVisible();
      // clicking swaps to the fallback (outline) icon; retry covers island hydration timing
      await expect(async () => {
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
      }).toPass();
      await expect(toggle.locator('svg[fill="currentColor"]')).toBeHidden();
    });
  });
}
