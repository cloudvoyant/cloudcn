// apps/wicn-docs/e2e/base-path.spec.ts
// Guards against the deploy-phase base-path bug: with `base: '/wicn/'`, string
// literal href/src in Astro templates stay root-absolute and 404 once the site
// is served from `https://cloudvoyant.github.io/wicn/`. Assert the rendered
// shell carries no such URLs.
import { test, expect } from '@playwright/test';

test.describe('Base-path', () => {
  test('rendered nav links and assets are /wicn/-prefixed', async ({ page }) => {
    await page.goto('components/button');

    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', /^\/wicn\//);
    await expect(page.locator('a[href="/"]')).toHaveCount(0);
    await expect(page.locator('a[href^="/"]:not([href^="/wicn/"])')).toHaveCount(0);
    await expect(page.locator('img[src^="/"]:not([src^="/wicn/"])')).toHaveCount(0);
    await expect(page.locator('[data-topnav] a[href="/wicn/general/introduction"]')).toHaveCount(1);
  });
});
