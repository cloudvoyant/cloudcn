// apps/docs/e2e/password-input.spec.ts
// Behavior + accessibility coverage for PasswordInput: controlled sync and
// the visibility toggle flipping the input type.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`PasswordInput controlled · ${framework}`, () => {
    test('keeps external state in sync and toggles visibility', async ({ page }) => {
      await page.goto('components/password-input');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const input = demo.locator('input[type="password"]').first();

      await expect(input).toBeVisible();
      await input.fill('secret-value');
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('secret-value');

      await demo.locator('[aria-label="Show password"]').click();
      await expect(demo.locator('input[type="text"]')).toBeVisible();

      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('initial');
    });
  });
}
