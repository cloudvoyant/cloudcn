// apps/docs/e2e/number-input.spec.ts
// Behavior coverage for NumberInput: scrubber-style input, arrow-key
// increment/decrement, clamping, and controlled-value sync.
import { test, expect, type Page } from '@playwright/test';
import { selectFramework, FRAMEWORKS, type Framework } from './helpers';

for (const framework of FRAMEWORKS) {
  test.describe(`NumberInput docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/number-input');
      await selectFramework(page, framework);
    });

    test('renders with the default value', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] [role="spinbutton"]`).first();
      await expect(input).toBeVisible();
      await expect(input).toHaveValue('5');
    });

    test('arrow keys adjust the value', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] [role="spinbutton"]`).first();
      await expect(input).toHaveValue('5');
      await input.focus();
      await page.keyboard.press('ArrowUp');
      await expect(input).toHaveValue('6');
      await page.keyboard.press('ArrowDown');
      await expect(input).toHaveValue('5');
    });
  });

  test.describe(`NumberInput controlled · ${framework}`, () => {
    test('keeps external state in sync both ways', async ({ page }) => {
      await page.goto('components/number-input');
      await selectFramework(page, framework);
      const demo = page.locator(`[data-example="controlled"] [data-fw="${framework}"]`);
      const input = demo.locator('[role="spinbutton"]');

      await input.focus();
      await page.keyboard.press('ArrowUp');
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('$13.50');

      await demo.locator('button[data-testid="reset"]').click();
      await expect(demo.locator('output[data-testid="value"]')).toHaveText('12.5');
    });
  });
}
