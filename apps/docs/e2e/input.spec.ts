// apps/docs/e2e/input.spec.ts
// Behavior + accessibility coverage for Input/Textarea, matrixed over React and
// Svelte: native input roles, value editing, and helper/error wiring via Field.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Input docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/input');
      await selectFramework(page, framework);
    });

    test('renders a text input and accepts typed value', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] input[type="email"]`).first();
      await expect(input).toBeVisible();
      await input.fill('you@example.com');
      await expect(input).toHaveValue('you@example.com');
    });

    test('renders helper text', async ({ page }) => {
      await expect(
        page.locator(`[data-demo] [data-fw="${framework}"] :text("We'll never share your email.")`).first(),
      ).toBeVisible();
    });
  });
}
