// apps/docs/e2e/mermaid.spec.ts
// Client-loading coverage for the Mermaid rich-text component, matrixed over React
// and Svelte via the docs demo islands: the placeholder carries the diagram source,
// the lazy-loaded mermaid chunk renders an SVG, invalid diagrams keep their source
// visible, and the JavaScript-disabled SSR HTML ships the placeholder, never an SVG.
import { selectFramework } from './helpers';
import { test, expect } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`Mermaid docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/mermaid');
      await selectFramework(page, framework);
    });

    test('placeholder root carries the JSON-encoded diagram source', async ({ page }) => {
      const root = page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code]`).first();
      const encoded = await root.getAttribute('data-mermaid-code');
      expect(encoded).not.toBeNull();
      expect(JSON.parse(encoded ?? '')).toContain('flowchart LR');
    });

    test('renders the diagram as an SVG after client load', async ({ page }) => {
      const svg = page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code] svg`).first();
      await expect(svg).toBeVisible({ timeout: 15_000 });
      const root = page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code]`).first();
      await expect(root).toHaveAttribute('data-mermaid-src', /flowchart LR/);
      await expect(root.locator('pre')).toHaveCount(0);
    });

    test('invalid diagram keeps the source visible instead of an SVG', async ({ page }) => {
      // Wait for mermaid to have loaded and rendered the valid first example, so the
      // missing SVG in the fallback example is a real negative, not a pre-load race.
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code] svg`).first()).toBeVisible({
        timeout: 15_000,
      });
      const fallback = page.locator('[data-example]').nth(1).locator(`[data-fw="${framework}"] [data-mermaid-code]`);
      await expect(fallback.locator('pre')).toBeVisible();
      await expect(fallback.locator('pre')).toContainText('not a valid mermaid diagram');
      await expect(fallback.locator('svg')).toHaveCount(0);
      // mermaid v11 appends its temp render container (`#d<render-id>`) to document.body;
      // suppressErrorRendering must make a failed render clean up after itself, leaving
      // no stray "Syntax error in text" graphic behind.
      await expect(page.locator('body > div[id^="dhelix-mmd-"]')).toHaveCount(0);
      await expect(page.locator('svg text', { hasText: 'Syntax error in text' })).toHaveCount(0);
    });
  });

  test.describe(`Mermaid client loading · ${framework}`, () => {
    test('degrades to the source when the mermaid chunk fails to load', async ({ page }) => {
      await page.route(/mermaid[^/]*\.js$/, (route) => route.abort());
      await page.goto('components/mermaid');
      await selectFramework(page, framework);
      const pre = page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code] pre`).first();
      await expect(pre).toBeVisible();
      await expect(pre).toContainText('flowchart LR');
      await page.waitForLoadState('networkidle');
      await expect(page.locator(`[data-demo] [data-fw="${framework}"] [data-mermaid-code] svg`)).toHaveCount(0);
    });
  });
}

test.describe('Mermaid SSR placeholder', () => {
  test.use({ javaScriptEnabled: false });

  test('server-rendered HTML is the source placeholder, not the diagram', async ({ page }) => {
    await page.goto('components/mermaid');
    const root = page.locator('[data-demo] [data-fw="react"] [data-mermaid-code]').first();
    await expect(root).toBeVisible();
    await expect(root.locator('pre')).toBeVisible();
    await expect(root.locator('pre')).toContainText('flowchart LR');
    await expect(root.locator('svg')).toHaveCount(0);
  });
});
