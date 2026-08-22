// apps/cloudcn-docs/e2e/item.spec.ts
// Behavior coverage for the Item primitive: the `surface` variant (Stack/HStack/
// VStack) renders rounded + bordered, the `plain` variant (Row/Col) renders
// without a border or rounding.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Item docs page · ${framework}`, () => {
    test('surface items are rounded and bordered, plain items are not', async ({ page }) => {
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

      expect(styles.some((s) => s.border > 0 && s.radius > 0)).toBe(true);
      expect(styles.some((s) => s.border === 0 && s.radius === 0)).toBe(true);
    });
  });
}
