// apps/wicn-docs/e2e/button.spec.ts
// Behavior + accessibility coverage for the Button, matrixed over React and
// Svelte via the docs demo islands: native button role, mouse/keyboard
// activation, and disabled-button inertness.
import { test, expect, type Locator, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];
type ClickCounter = { __clicks: number };

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

function introButton(page: Page, framework: Framework, text: string): Locator {
  return page.locator(`[data-demo] [data-fw="${framework}"] button:has-text("${text}")`).first();
}

/** Attach a native click counter to a button and return a reader for it. */
async function trackClicks(page: Page, target: Locator): Promise<() => Promise<number>> {
  await target.evaluate((el) => {
    (window as unknown as ClickCounter).__clicks = 0;
    el.addEventListener('click', () => {
      (window as unknown as ClickCounter).__clicks += 1;
    });
  });
  return () => page.evaluate(() => (window as unknown as ClickCounter).__clicks);
}

for (const framework of FRAMEWORKS) {
  test.describe(`Button docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/button');
      await selectFramework(page, framework);
    });

    test('renders a native button with the button role', async ({ page }) => {
      const btn = introButton(page, framework, 'Primary');
      await expect(btn).toBeVisible();
      await expect(btn).toHaveAttribute('type', 'button');
      expect(await btn.evaluate((el) => el.tagName)).toBe('BUTTON');
    });

    test('fires a click event on mouse activation', async ({ page }) => {
      const btn = introButton(page, framework, 'Primary');
      const clicks = await trackClicks(page, btn);
      await btn.click();
      expect(await clicks()).toBeGreaterThan(0);
    });

    test('activates with the Enter and Space keys', async ({ page }) => {
      const btn = introButton(page, framework, 'Primary');
      const clicks = await trackClicks(page, btn);

      await btn.focus();
      await page.keyboard.press('Enter');
      expect(await clicks()).toBeGreaterThan(0);

      await page.keyboard.press('Space');
      expect(await clicks()).toBeGreaterThan(1);
    });

    test('renders disabled buttons that cannot be activated', async ({ page }) => {
      const disabled = page
        .locator('[data-example]')
        .last()
        .locator(`[data-fw="${framework}"] button`)
        .first();
      await expect(disabled).toBeDisabled();
      expect(await disabled.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
    });
  });
}
