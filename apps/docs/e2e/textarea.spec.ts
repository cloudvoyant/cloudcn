// apps/docs/e2e/textarea.spec.ts
// Behavior + accessibility coverage for Textarea: controlled sync.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Textarea controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/textarea');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const textarea = demo.locator('textarea').first();

      await textarea.fill('controlled value');
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('controlled value');

      await demo.locator('button[data-testid="reset"]').click();
      await expect(textarea).toHaveValue('initial');
    });
  });
}
