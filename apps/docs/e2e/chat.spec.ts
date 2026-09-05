// apps/docs/e2e/chat.spec.ts
// Behavior coverage for the dumb Chat surface, matrixed over React and Svelte:
// composer sends on Enter (with an inert-when-empty Send button), attachments
// pick/remove/send, sending/error statuses render, typing indicator announces
// politely.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Chat docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/chat');
      await selectFramework(page, framework);
    });

    test('Enter in the composer appends the message', async ({ page }) => {
      const textarea = page.locator(`[data-fw="${framework}"] textarea[aria-label="Message"]`).first();
      const send = page.locator(`[data-fw="${framework}"] button[aria-label="Send message"]`).first();
      // Inert while the composer is empty, live as soon as there is text.
      await expect(send).toBeDisabled();
      await textarea.fill('Hello there');
      await expect(send).toBeEnabled();
      await textarea.press('Enter');
      await expect(
        page.locator(`[data-fw="${framework}"] [data-variant="default"]:has-text("Hello there")`).first(),
      ).toBeVisible();
      await expect(textarea).toHaveValue('');
      await expect(send).toBeDisabled();
    });

    test('a picked attachment shows a removable chip and sends under the message', async ({ page }) => {
      const fileInput = page.locator(`[data-fw="${framework}"] input[type="file"]`).first();
      const textarea = page.locator(`[data-fw="${framework}"] textarea[aria-label="Message"]`).first();
      const send = page.locator(`[data-fw="${framework}"] button[aria-label="Send message"]`).first();
      // The picker input is visually hidden but real, so setInputFiles drives it.
      await fileInput.setInputFiles([{ name: 'note.txt', mimeType: 'text/plain', buffer: Buffer.from('hi') }]);
      const chip = page.locator(`[data-fw="${framework}"] button[aria-label="Remove note.txt"]`).first();
      await expect(chip).toBeVisible();
      await expect(send).toBeEnabled();

      await chip.click();
      await expect(chip).toBeHidden();
      await expect(send).toBeDisabled();

      await fileInput.setInputFiles([{ name: 'ticket.txt', mimeType: 'text/plain', buffer: Buffer.from('yo') }]);
      await textarea.press('Enter');
      await expect(page.locator(`[data-fw="${framework}"] a:has-text("ticket.txt")`).first()).toBeVisible();
    });

    test('sending and error statuses render their indicators', async ({ page }) => {
      await expect(
        page.locator(`[data-fw="${framework}"] [data-status="sending"]:has-text("still sending")`).first(),
      ).toBeVisible();
      await expect(
        page.locator(`[data-fw="${framework}"] [data-status="error"]:has-text("Failed to send")`).first(),
      ).toBeVisible();
    });

    test('the typing indicator is announced as a polite status', async ({ page }) => {
      const indicator = page.locator(`[data-fw="${framework}"] [role="status"][aria-label="Sam is typing"]`).first();
      await expect(indicator).toBeVisible();
    });
  });
}
