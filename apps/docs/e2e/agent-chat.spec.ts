// apps/docs/e2e/agent-chat.spec.ts
// Behavior coverage for AgentChat streaming, matrixed over React and Svelte:
// sending a message shows the live streaming region, then the finished text
// settles into the thread as an agent message.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`AgentChat docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/agent-chat');
      await selectFramework(page, framework);
    });

    test('a sent message streams, then settles into the thread', async ({ page }) => {
      const textarea = page.locator(`[data-fw="${framework}"] textarea[aria-label="Message"]`).first();
      await textarea.fill('Stream something');
      await textarea.press('Enter');

      // The user message lands in the thread immediately.
      await expect(
        page.locator(`[data-fw="${framework}"] [data-variant="user"]:has-text("Stream something")`).first(),
      ).toBeVisible();

      // The live streaming region appears while tokens arrive.
      await expect(page.locator(`[data-fw="${framework}"] [data-agent-streaming]`).first()).toBeVisible();

      // Once done, the full text settles as an agent message (5 x 600ms + slack).
      await expect(async () => {
        await expect(
          page
            .locator(`[data-fw="${framework}"] [data-variant="agent"]:has-text("Streaming is fun")`)
            .filter({ hasText: 'Done — send another message!' })
            .first(),
        ).toBeVisible();
      }).toPass({ timeout: 10_000 });
    });
  });
}
