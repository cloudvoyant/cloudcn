// apps/docs/e2e/tags-input.spec.ts
// Behavior + accessibility coverage for TagInput: adding a tag via Enter,
// removing a tag via the delete trigger.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`TagInput docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/tags-input');
      await selectFramework(page, framework);
    });

    test('renders the default tags', async ({ page }) => {
      const preview = page.locator(`[data-example-preview] [data-fw="${framework}"]`).first();
      await expect(preview.locator(':text("react")').first()).toBeVisible();
      await expect(preview.locator(':text("svelte")').first()).toBeVisible();
    });

    test('adds a tag by typing and pressing Enter', async ({ page }) => {
      const preview = page.locator(`[data-example-preview] [data-fw="${framework}"]`).first();
      const input = preview.locator('input[data-part="input"]').first();
      await expect(async () => {
        await input.fill('vue');
        await input.press('Enter');
        await expect(preview.locator(':text("vue")').first()).toBeVisible();
      }).toPass();
    });

    test('removes a tag via its delete trigger', async ({ page }) => {
      const preview = page.locator(`[data-example-preview] [data-fw="${framework}"]`).first();
      const firstDelete = preview.locator('button[aria-label="Remove tag"]').first();
      await expect(async () => {
        await firstDelete.click();
        await expect(preview.locator(':text("react")').first()).toBeHidden();
      }).toPass();
    });
  });

  test.describe(`TagInput controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/tags-input');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const input = demo.locator('input[data-part="input"]').first();

      await expect(demo.locator('[data-part="item-text"]')).toHaveCount(2);
      await expect(demo.locator('[data-part="item-text"]').first()).toHaveText('react');
      await input.fill('vue');
      await input.press('Enter');
      await expect(demo.locator('[data-part="item-text"]')).toHaveCount(3);
      await expect(demo.locator('[data-part="item-text"]').last()).toHaveText('vue');
      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('[data-part="item-text"]')).toHaveCount(2);
    });
  });
}
