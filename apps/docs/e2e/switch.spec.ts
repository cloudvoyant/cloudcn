// apps/docs/e2e/switch.spec.ts
// Behavior + accessibility coverage for Switch: native hidden input, checked
// state toggling via mouse and Space key. Ark UI v5 renders the switch as a
// <label> plus a native hidden <input type="checkbox"> with data-state.
import { test, expect, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Switch docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/switch');
      await selectFramework(page, framework);
    });

    test('renders a switch with initial checked state', async ({ page }) => {
      const sw = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).first();
      await expect(sw).toBeChecked();
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] [data-scope="switch"][data-part="root"]`).first()).toHaveAttribute(
        'data-state',
        'checked',
      );
    });

    test('toggles checked state on click', async ({ page }) => {
      const sw = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).first();
      const root = page.locator(`[data-demo] [data-fw="${framework}"] [data-scope="switch"][data-part="root"]`).first();
      await expect(sw).toBeChecked();
      await expect(async () => {
        await root.click();
        await expect(sw).not.toBeChecked();
      }).toPass();
    });

    test('toggles with the Space key', async ({ page }) => {
      const sw = page.locator(`[data-demo] [data-fw="${framework}"] input[type="checkbox"]`).first();
      await expect(async () => {
        await sw.focus();
        await page.keyboard.press('Space');
        await expect(sw).not.toBeChecked();
      }).toPass();
    });
  });
}
