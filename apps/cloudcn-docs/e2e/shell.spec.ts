// apps/cloudcn-docs/e2e/shell.spec.ts
import { test, expect, type Page } from '@playwright/test';

test.describe('Docs shell', () => {
  test('framework selector defaults to React and switches islands', async ({ page }) => {
    await page.goto('/components/button');
    await expect(page.locator('[data-framework-selector]')).toBeVisible();
    await expect(page.locator('[data-demo] [data-fw="react"]').first()).toBeVisible();
    await expect(page.locator('[data-demo] [data-fw="svelte"]').first()).toBeHidden();

    await page.locator('[data-framework-selector] button[data-fw="svelte"]').click();
    await expect(page.locator('[data-demo] [data-fw="svelte"]').first()).toBeVisible();
    await expect(page.locator('[data-demo] [data-fw="react"]').first()).toBeHidden();
  });

  test('framework selection persists across navigation', async ({ page }) => {
    await page.goto('/components/button');
    await page.locator('[data-framework-selector] button[data-fw="svelte"]').click();
    await expect(page.locator('[data-demo] [data-fw="svelte"]').first()).toBeVisible();

    await page.goto('/general/introduction');
    await expect(page.locator('html')).toHaveAttribute('data-framework', 'svelte');
  });

  test('theme toggle switches the dark class and persists', async ({ page }) => {
    await page.goto('/components/button');
    await page.locator('[data-theme-toggle]').click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.goto('/general/introduction');
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.locator('[data-theme-toggle]').click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('topnav shows a border once the page is scrolled', async ({ page }) => {
    await page.goto('/components/button');
    const header = page.locator('[data-topnav]');
    await expect(header).not.toHaveClass(/scrolled/);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(header).toHaveClass(/scrolled/);
  });

  test('mobile sidebar overlays the viewport without a backdrop', async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 800 });
    await page.goto('/general/introduction');

    const drawer = page.locator('[data-mobile-sidebar]');
    await expect(drawer).toHaveCSS('visibility', 'hidden');

    await page.locator('[data-mobile-open]').click();
    await expect(page.locator('html')).toHaveClass(/mobile-nav-open/);
    await expect(drawer).toHaveCSS('visibility', 'visible');

    await page.keyboard.press('Escape');
    await expect(page.locator('html')).not.toHaveClass(/mobile-nav-open/);
  });
});
