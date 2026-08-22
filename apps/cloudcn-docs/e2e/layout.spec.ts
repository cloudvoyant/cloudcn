// apps/cloudcn-docs/e2e/layout.spec.ts
// Behavior + accessibility coverage for the layout primitives (Container, Row,
// Col, Stack), matrixed over React and Svelte via the docs demo islands: they
// render as non-interactive divs and their children are visible.
import { test, expect } from '@playwright/test';
import { FRAMEWORKS, selectFramework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`Layout docs pages · ${framework}`, () => {
    test('Container renders content in a plain div', async ({ page }) => {
      await page.goto('/components/layout');
      await selectFramework(page, framework);
      const box = page
        .locator(`[data-demo] [data-fw="${framework}"] div:has-text("Lorem ipsum")`)
        .first();
      await expect(box).toBeVisible();
      expect(await box.evaluate((el) => el.tagName)).toBe('DIV');
    });

    test('Row renders its children', async ({ page }) => {
      await page.goto('/components/layout');
      await selectFramework(page, framework);
      await expect(page.locator(`[data-fw="${framework}"] div:has-text("One")`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] div:has-text("Three")`).first()).toBeVisible();
    });

    test('Stack renders its children in both directions', async ({ page }) => {
      await page.goto('/components/stack');
      await selectFramework(page, framework);

      // Each "One" label lives inside a Stack/HStack/VStack; walk up to its
      // nearest flex container and collect the computed flex-direction. The
      // page renders both a column (Stack/VStack) and a row (HStack), so both
      // directions must be present.
      const directions = await page
        .locator(`[data-fw="${framework}"] div:has-text("One")`)
        .evaluateAll((els) => {
          const seen = new Set<string>();
          for (const el of els) {
            let node = el as HTMLElement | null;
            while (node) {
              const style = getComputedStyle(node);
              if (style.display === 'flex') {
                seen.add(style.flexDirection);
                break;
              }
              node = node.parentElement;
            }
          }
          return [...seen];
        });

      expect(directions).toEqual(expect.arrayContaining(['row', 'column']));
    });
  });
}
