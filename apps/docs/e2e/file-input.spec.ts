// apps/docs/e2e/file-input.spec.ts
// Behavior + accessibility coverage for FileInput: controlled files sync, the
// file appearing in the item list, and clearing external state removing it.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`FileInput controlled · ${framework}`, () => {
    test('shows a selected file and clears it on reset', async ({ page }) => {
      await page.goto('components/file-input');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const hiddenInput = demo.locator('input[type="file"]').first();

      await hiddenInput.setInputFiles({
        name: 'photo.png',
        mimeType: 'image/png',
        buffer: Buffer.from('fake-png'),
      });

      await expect(demo.locator('output[data-testid="value"]')).toHaveText('photo.png');
      await expect(demo.locator(':text("photo.png")').first()).toBeVisible();

      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('');
      await expect(demo.locator(':text("photo.png")')).toHaveCount(0);
    });
  });
}
