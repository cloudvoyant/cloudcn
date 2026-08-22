// apps/cloudcn-docs/e2e/scroll.spec.ts
// Behavior coverage for the Scroll, matrixed over React and Svelte: it
// renders scrollable content and an Ark scrollbar thumb (data-part="thumb").
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Scroll docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/components/scroll');
      await selectFramework(page, framework);
    });

    test('renders scrollable content', async ({ page }) => {
      const tag = page.locator(`[data-fw="${framework}"] div:has-text("v1.2.0-beta.")`).first();
      await expect(tag).toBeVisible();
    });

    test('reveals a scrollbar thumb when content overflows', async ({ page }) => {
      const fw = `[data-fw="${framework}"]`;
      const thumb = page.locator(`${fw} [data-part="thumb"]`).first();
      const scrollbar = thumb.locator('xpath=..');

      // toBeVisible ignores opacity and the thumb's own computed opacity is
      // always 1 — the opacity-0 lives on the scrollbar parent. Assert the
      // reveal state directly: the scrollbar stays opacity-0 until the
      // viewport is hovered, and Ark marks it data-scrolling while it scrolls.
      await expect(scrollbar).toHaveCSS('opacity', '0');

      const viewport = page.locator(`${fw} [data-part="viewport"]`).first();
      await viewport.hover();
      await expect(scrollbar).toHaveCSS('opacity', '1');

      await viewport.evaluate((el) => {
        el.scrollTop = el.scrollHeight;
      });
      await expect(scrollbar).toHaveAttribute('data-scrolling', /.*/);
      await expect
        .poll(() => viewport.evaluate((el) => el.scrollTop))
        .toBeGreaterThan(0);
    });
  });
}
