// apps/docs/e2e/chat-message.spec.ts
// Behavior + accessibility coverage for ChatMessage, matrixed over React and
// Svelte via the docs demo islands: reaction pills toggle counts and
// aria-pressed, and the emoji picker menu is keyboard-operable (Enter selects,
// Escape dismisses) as well as mouse-operable.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`ChatMessage docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/chat-message');
      await selectFramework(page, framework);
    });

    test('renders role variants with data attributes', async ({ page }) => {
      await expect(page.locator(`[data-fw="${framework}"] [data-variant="user"]`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] [data-variant="agent"]`).first()).toBeVisible();
      await expect(page.locator(`[data-fw="${framework}"] [data-variant="default"]`).first()).toBeVisible();
    });

    test('clicking a reaction pill toggles aria-pressed and updates the count', async ({ page }) => {
      const pill = page.locator(`[data-fw="${framework}"] button[aria-label="React with 👍"]`).first();
      await expect(pill).toHaveAttribute('aria-pressed', 'false');
      await expect(pill).toHaveText(/2/);
      await expect(async () => {
        await pill.click();
        await expect(pill).toHaveAttribute('aria-pressed', 'true');
        await expect(pill).toHaveText(/3/);
      }).toPass();
      await expect(async () => {
        await pill.click();
        await expect(pill).toHaveAttribute('aria-pressed', 'false');
        await expect(pill).toHaveText(/2/);
      }).toPass();
    });

    test('the emoji menu adds a reaction pill to the message', async ({ page }) => {
      const trigger = page.locator(`[data-fw="${framework}"] button[aria-label="Add emoji reaction"]`).first();
      await trigger.click();
      // Popover portals render outside the demo wrapper and both framework islands
      // stay mounted, so target the open dialog (same pattern as popover.spec.ts).
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toHaveAttribute('data-state', 'open');
      const heart = dialog.locator('button[aria-label="React with \u2764\ufe0f"]');
      await expect(heart).toBeVisible();
      await heart.click();
      await expect(
        page.locator(`[data-fw="${framework}"] button[aria-label="React with \u2764\ufe0f"]`).first(),
      ).toBeVisible();
    });

    test('the emoji menu dismisses on Escape', async ({ page }) => {
      const trigger = page.locator(`[data-fw="${framework}"] button[aria-label="Add emoji reaction"]`).first();
      await trigger.click();
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toHaveAttribute('data-state', 'open');
      await page.keyboard.press('Escape');
      await expect(dialog).toBeHidden();
    });

    test('Enter on a focused emoji adds the reaction and closes the menu', async ({ page }) => {
      const trigger = page.locator(`[data-fw="${framework}"] button[aria-label="Add emoji reaction"]`).first();
      await trigger.click();
      const dialog = page.locator('[role="dialog"]:visible').first();
      await expect(dialog).toHaveAttribute('data-state', 'open');
      const rocket = dialog.locator('button[aria-label="React with \ud83d\ude80"]');
      await rocket.focus();
      await rocket.press('Enter');
      await expect(
        page.locator(`[data-fw="${framework}"] button[aria-label="React with \ud83d\ude80"]`).first(),
      ).toBeVisible();
      await expect(dialog).toBeHidden();
    });
  });
}
