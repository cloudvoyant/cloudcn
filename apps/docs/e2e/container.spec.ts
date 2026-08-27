// apps/docs/e2e/container.spec.ts
// Behavior coverage for Container, Row, and Col (the layout page): Container
// fills its parent; Row lays items side by side; Col stacks them. Layout items
// are plain — no border, no surface styling.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Container docs page · ${framework}`, () => {
    test('Container fills its parent', async ({ page }) => {
      await page.goto('components/layout');
      await selectFramework(page, framework);

      const item = page.locator(`[data-fw="${framework}"] div.bg-muted:has-text("Lorem ipsum")`).first();
      await expect(item).toBeVisible();
      const container = item.locator('xpath=..');
      const { w, pw } = await container.evaluate((el) => {
        const cw = el.getBoundingClientRect().width;
        let p = el.parentElement;
        while (p && p.getBoundingClientRect().width === 0) p = p.parentElement;
        return { w: cw, pw: p ? p.getBoundingClientRect().width : 0 };
      });
      expect(Math.abs(w - pw)).toBeLessThan(2);
    });

    test('Row lays items side by side; Col stacks them', async ({ page }) => {
      await page.goto('components/layout');
      await selectFramework(page, framework);

      const info = await page
        .locator(`[data-fw="${framework}"] div.p-3:not(.border)`)
        .evaluateAll((els) =>
          els.map((el) => {
            const r = el.getBoundingClientRect();
            return { x: r.x, y: r.y, bg: getComputedStyle(el).backgroundColor };
          }),
        );

      const sideBySide = info.some((a, i) =>
        info.some((b, j) => i !== j && Math.abs(a.y - b.y) < 2 && Math.abs(a.x - b.x) > 2 && a.bg !== b.bg),
      );
      const stacked = info.some((a, i) =>
        info.some((b, j) => i !== j && Math.abs(a.x - b.x) < 2 && Math.abs(a.y - b.y) > 2 && a.bg !== b.bg),
      );

      expect(sideBySide).toBe(true);
      expect(stacked).toBe(true);
    });
  });
}
