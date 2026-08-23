// apps/wicn-docs/e2e/sidebar.spec.ts
// Behavior + accessibility coverage for the Sidebar, matrixed over React and
// Svelte via the docs demo islands: collapse-to-icon-rail, collapse-to-offcanvas,
// and rail-handle toggling. Asserts observable state (`data-state`) and visibility,
// never generated class strings.
import { test, expect, type Locator, type Page } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function selectFramework(page: Page, framework: Framework) {
  await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
  const demo = page.locator(`[data-demo] [data-fw="${framework}"]`).first();
  await expect(demo).toBeVisible();
}

function exampleRegion(page: Page, framework: Framework, index: number): Locator {
  return page.locator(`[data-example]`).nth(index).locator(`[data-fw="${framework}"]`).first();
}

function sidebar(page: Page, region: Locator): Locator {
  return region.locator(`[data-slot="sidebar"]`).first();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Sidebar docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/sidebar');
      await selectFramework(page, framework);
    });

    test('collapses to an icon rail (container narrows, icon remains)', async ({ page }) => {
      const region = exampleRegion(page, framework, 0); // icon example
      const sb = sidebar(page, region);
      const container = region.locator('[data-slot="sidebar-container"]').first();
      const menuButton = region.locator('[data-sidebar="menu-button"]:has(svg)').first();
      const trigger = region.locator('[data-sidebar="trigger"]').first();

      await expect(sb).toHaveAttribute('data-state', 'expanded');
      // The desktop sidebar is 16rem (256px) wide when expanded.
      await expect(container).toHaveCSS('width', '256px');

      await expect(async () => {
        await trigger.click();
        await expect(sb).toHaveAttribute('data-state', 'collapsed');
      }).toPass();

      // The icon rail collapses to the 3rem icon width (48px) while the menu button's icon stays visible.
      await expect(container).toHaveCSS('width', '48px');
      await expect(menuButton).toBeVisible();
      await expect(menuButton.locator('svg').first()).toBeVisible();

      // And it can be expanded again.
      await expect(async () => {
        await trigger.click();
        await expect(sb).toHaveAttribute('data-state', 'expanded');
      }).toPass();
      await expect(container).toHaveCSS('width', '256px');
    });

    test('completely disappears on collapse (offcanvas)', async ({ page }) => {
      const region = exampleRegion(page, framework, 1); // offcanvas example
      const sb = sidebar(page, region);
      const gap = region.locator('[data-slot="sidebar-gap"]').first();
      const trigger = region.locator('[data-sidebar="trigger"]').first();

      await expect(sb).toHaveAttribute('data-state', 'expanded');

      await expect(async () => {
        await trigger.click();
        await expect(sb).toHaveAttribute('data-state', 'collapsed');
      }).toPass();

      // The offcanvas gap collapses to zero width — the sidebar is fully gone.
      await expect(gap).toHaveCSS('width', '0px');

      await expect(async () => {
        await trigger.click();
        await expect(sb).toHaveAttribute('data-state', 'expanded');
      }).toPass();
      expect(await gap.evaluate((el) => el.getBoundingClientRect().width)).toBeGreaterThan(0);
    });

    test('toggles expanded/collapsed with the rail handle', async ({ page }) => {
      const region = exampleRegion(page, framework, 2); // rail example
      const sb = sidebar(page, region);
      const rail = region.locator('[data-sidebar="rail"]').first();

      await expect(sb).toHaveAttribute('data-state', 'expanded');
      await expect(rail).toHaveAttribute('aria-label', 'Toggle Sidebar');

      // Click a point on the rail's right edge: when collapsed (offcanvas) the
      // 16px-wide rail peeks ~8px into the demo box, so the element center can
      // fall under the card's overflow clip.
      const clickRail = () => rail.click({ position: { x: 13, y: 100 } });

      await expect(async () => {
        await clickRail();
        await expect(sb).toHaveAttribute('data-state', 'collapsed');
      }).toPass();

      await expect(async () => {
        await clickRail();
        await expect(sb).toHaveAttribute('data-state', 'expanded');
      }).toPass();
    });

    test('rail activates with the Enter key', async ({ page }) => {
      const region = exampleRegion(page, framework, 2); // rail example
      const sb = sidebar(page, region);
      const rail = region.locator('[data-sidebar="rail"]').first();

      await expect(sb).toHaveAttribute('data-state', 'expanded');
      await expect(async () => {
        await rail.focus();
        await page.keyboard.press('Enter');
        await expect(sb).toHaveAttribute('data-state', 'collapsed');
      }).toPass();
    });

    test('trigger and rail carry accessible labels', async ({ page }) => {
      const region = exampleRegion(page, framework, 2); // rail example
      await expect(region.locator('[data-sidebar="trigger"]').first()).toHaveAttribute('aria-label', 'Toggle Sidebar');
      await expect(region.locator('[data-sidebar="rail"]').first()).toHaveAttribute('aria-label', 'Toggle Sidebar');
    });
  });
}
