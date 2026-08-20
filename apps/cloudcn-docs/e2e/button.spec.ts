// apps/cloudcn-docs/e2e/button.spec.ts
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Button docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/components/button');
      await selectFramework(page, framework);
    });

    test('renders the demo island with shared classes', async ({ page }) => {
      const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
      await expect(demo.locator('button:has-text("Primary")').first()).toHaveClass(/bg-primary/);
      await expect(demo.locator('button:has-text("Success")').first()).toHaveClass(/bg-success/);
      await expect(demo.locator('button:has-text("Danger")').first()).toHaveClass(/bg-danger/);

      // The Outline example's first button uses the outline variant with a border.
      const outlineCard = page.locator('[data-example]').nth(1);
      const outlineButton = outlineCard.locator(`[data-fw="${framework}"] button`).first();
      await expect(outlineButton).toHaveClass(/border/);
      await expect(outlineButton).toHaveClass(/text-/);
    });

    test('renders every example card with preview and code views', async ({ page }) => {
      const examples = page.locator('[data-example]');
      await expect(examples).toHaveCount(7);

      // First example is Solid — preview visible, code hidden by default.
      const solid = examples.first();
      await expect(solid.locator('[data-example-preview]')).toBeVisible();
      await expect(solid.locator('[data-example-code]')).toBeHidden();

      // Toggle to show code — only the active framework's code block is visible.
      await solid.locator('[data-example-toggle]').click();
      const codePanel = solid.locator('[data-example-code]');
      await expect(codePanel).toBeVisible();
      await expect(solid.locator('[data-example-toggle]')).toHaveAttribute('aria-expanded', 'true');
      await expect(codePanel.locator('.astro-code:visible')).toHaveCount(1);
      await expect(codePanel.locator('.astro-code').filter({ visible: true })).toContainText(
        framework === 'react' ? 'cloudcn-react' : 'cloudcn-svelte',
      );
    });
  });
}
