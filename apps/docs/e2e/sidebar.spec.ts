// apps/docs/e2e/sidebar.spec.ts
// Behavior + accessibility coverage for the Sidebar, matrixed over React and
// Svelte via the docs demo islands: collapse-to-icon-rail, collapse-to-offcanvas,
// and rail-handle toggling. Asserts observable state (`data-state`) and visibility,
// never generated class strings. The demos render in PreviewFrame iframes, so
// assertions target the active framework's island inside each frame.
import { test, expect, type Locator, type Page, type FrameLocator } from '@playwright/test';

const FRAMEWORKS = ['react', 'svelte'] as const;
type Framework = (typeof FRAMEWORKS)[number];

function exampleFrame(page: Page, index: number): FrameLocator {
  return page.locator('[data-example]').nth(index).frameLocator('iframe[data-preview]');
}

// Resolves an example's PreviewFrame card by identity (its `data-preview-example`
// slug), not by ordinal, so unrelated examples added elsewhere on the page can't
// shift what a test targets.
function previewCard(page: Page, example: string): Locator {
  return page.locator(`[data-preview-frame][data-component="sidebar"][data-preview-example="${example}"]`);
}

// Shared mobile-sheet flow: switch the example's frame to mobile width, open the
// drawer via the trigger, assert the sheet's swipe direction and open state,
// then dismiss with Esc.
async function assertMobileSheet(page: Page, example: string, framework: Framework, expectedSwipe: 'left' | 'down') {
  const card = previewCard(page, example);
  await card.locator('button[data-preview-width="mobile"]').click();
  const fw = card.frameLocator('iframe[data-preview]').locator(`[data-fw="${framework}"]`);
  const drawer = fw.locator('[data-slot="sidebar"][data-mobile="true"]');
  const positioner = fw.locator('[data-part="positioner"]');
  const trigger = fw.locator('[data-sidebar="trigger"]');

  // Closed by default: no overlay is visible.
  await expect(positioner).toBeHidden();

  await expect(async () => {
    await trigger.click();
    await expect(positioner).toBeVisible();
  }).toPass();
  await expect(drawer).toHaveAttribute('data-swipe-direction', expectedSwipe);
  await expect(drawer).toHaveAttribute('data-state', 'open');

  // Esc dismisses it and removes the overlay entirely.
  await page.keyboard.press('Escape');
  await expect(positioner).toBeHidden();
}

function sidebar(frame: FrameLocator, framework: Framework) {
  // The desktop sidebar (not the mobile drawer, which also carries
  // data-slot="sidebar" but with data-mobile="true").
  return frame.locator(`[data-fw="${framework}"] [data-slot="sidebar"]:not([data-mobile="true"])`).first();
}

for (const framework of FRAMEWORKS) {
  test.describe(`Sidebar docs page · ${framework}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/sidebar');
      // Every Sidebar example renders in a PreviewFrame iframe — there are no
      // inline islands — so wait for the framework selector to hydrate, then
      // click; the frames pick up the framework via postMessage.
      await page.locator('[data-framework-selector][data-ready]').waitFor();
      await page.locator(`[data-framework-selector] button[data-fw="${framework}"]`).click();
    });

    test('collapses to an icon rail (container narrows, icon remains)', async ({ page }) => {
      const frame = exampleFrame(page, 0); // icon example
      const sb = sidebar(frame, framework);
      const container = frame.locator(`[data-fw="${framework}"] [data-slot="sidebar-container"]`).first();
      const menuButton = frame.locator(`[data-fw="${framework}"] [data-sidebar="menu-button"]:has(svg)`).first();
      const trigger = frame.locator(`[data-fw="${framework}"] [data-sidebar="trigger"]`).first();

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

    test('renders as a full-height mobile side sheet', async ({ page }) => {
      // The icon example (side="left") opens a full-height sheet anchored left.
      await assertMobileSheet(page, 'icon', framework, 'left');
    });

    test('renders the right sidebar as a bottom sheet', async ({ page }) => {
      // The right-side example lives in pending docs work not yet on this branch,
      // so skip (rather than fail) when it is absent; it runs wherever the example
      // is registered. Resolved by identity, so a different example occupying this
      // position can't turn the clean skip into a wrong-example assertion.
      if ((await previewCard(page, 'right-side').count()) === 0) {
        test.skip(true, 'right-side sidebar example not registered in docs examples');
      }
      await assertMobileSheet(page, 'right-side', framework, 'down');
    });

    test('completely disappears on collapse (offcanvas)', async ({ page }) => {
      const frame = exampleFrame(page, 1); // offcanvas example
      const sb = sidebar(frame, framework);
      const gap = frame.locator(`[data-fw="${framework}"] [data-slot="sidebar-gap"]`).first();
      const trigger = frame.locator(`[data-fw="${framework}"] [data-sidebar="trigger"]`).first();

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
      await expect(gap).toHaveCSS('width', '256px');
    });

    test('toggles expanded/collapsed with the rail handle', async ({ page }) => {
      const frame = exampleFrame(page, 2); // rail example
      const sb = sidebar(frame, framework);
      const rail = frame.locator(`[data-fw="${framework}"] [data-sidebar="rail"]`).first();

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
      const frame = exampleFrame(page, 2); // rail example
      const sb = sidebar(frame, framework);
      const rail = frame.locator(`[data-fw="${framework}"] [data-sidebar="rail"]`).first();

      await expect(sb).toHaveAttribute('data-state', 'expanded');
      await expect(async () => {
        await rail.focus();
        await page.keyboard.press('Enter');
        await expect(sb).toHaveAttribute('data-state', 'collapsed');
      }).toPass();
    });

    test('trigger and rail carry accessible labels', async ({ page }) => {
      const frame = exampleFrame(page, 2); // rail example
      await expect(frame.locator(`[data-fw="${framework}"] [data-sidebar="trigger"]`).first()).toHaveAttribute(
        'aria-label',
        'Toggle Sidebar',
      );
      await expect(frame.locator(`[data-fw="${framework}"] [data-sidebar="rail"]`).first()).toHaveAttribute(
        'aria-label',
        'Toggle Sidebar',
      );
    });
  });
}
