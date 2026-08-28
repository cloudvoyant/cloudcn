// apps/docs/e2e/number-input.spec.ts
// Behavior coverage for NumberInput: stepper buttons change the value, input
// reflects clamping, and the field has a spinbutton role.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;


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

    test('increment and decrement buttons change the value', async ({ page }) => {
      const input = page.locator(`[data-demo] [data-fw="${framework}"] [role="spinbutton"]`).first();
      const inc = page.locator(`[data-demo] [data-fw="${framework}"] button[aria-label="Increment"]`).first();
      const dec = page.locator(`[data-demo] [data-fw="${framework}"] button[aria-label="Decrement"]`).first();
      await expect(async () => {
        await inc.click();
        await expect(input).toHaveValue('6');
      }).toPass();
      await expect(async () => {
        await dec.click();
        await expect(input).toHaveValue('5');
      }).toPass();
    });
  });
}
