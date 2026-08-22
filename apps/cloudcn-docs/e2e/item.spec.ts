// apps/cloudcn-docs/e2e/item.spec.ts
// Behavior coverage for the Item primitive: items inside Stack/HStack/VStack
// use the `surface` variant and render rounded + bordered.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Item docs page · ${framework}`, () => {
    test('items are rounded and bordered', async ({ page }) => {
      await page.goto('/components/item');
      await selectFramework(page, framework);

      const items = page.locator(`[data-fw="${framework}"] div.p-3:has-text("One")`);
      const styles = await items.evaluateAll((els) =>
        els.map((el) => {
          const cs = getComputedStyle(el);
          return {
            border: parseFloat(cs.borderTopWidth),
            radius: parseFloat(cs.borderTopLeftRadius),
          };
        }),
      );

      expect(styles.length).toBeGreaterThan(0);
      expect(styles.every((s) => s.border > 0 && s.radius > 0)).toBe(true);
    });
  });
}
