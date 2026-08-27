// apps/docs/e2e/stack.spec.ts
// Behavior coverage for Stack/HStack/VStack: items are spaced and bordered
// (the `surface` look used for visual lists).
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Stack docs page · ${framework}`, () => {
    test('items are spaced and bordered', async ({ page }) => {
      await page.goto('components/stack');
      await selectFramework(page, framework);

      const items = page.locator(`[data-fw="${framework}"] div.border:has-text("One")`);
      await expect(items.first()).toBeVisible();

      const info = await items.evaluateAll((els) =>
        els.map((el) => {
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          return { border: parseFloat(cs.borderTopWidth), x: r.x, y: r.y };
        }),
      );

      expect(info.length).toBeGreaterThan(0);
      expect(info.every((s) => s.border > 0)).toBe(true);
      const positions = new Set(info.map((s) => `${Math.round(s.x)},${Math.round(s.y)}`));
      expect(positions.size).toBeGreaterThan(1);
    });
  });
}
