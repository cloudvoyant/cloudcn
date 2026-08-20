// apps/cloudcn-docs/playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 2,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:4321',
  },
  webServer: {
    // `astro preview` daemonizes when stdout is not a TTY (Playwright pipes it),
    // so the wrapper stays alive polling the URL and stops the daemon on exit.
    // Stale daemons would otherwise be reused by Playwright (stale build).
    command:
      'pnpm run preview stop >/dev/null 2>&1 || true; ' +
      'pnpm run build && pnpm run preview --port 4321 --background >/dev/null 2>&1 || true; ' +
      'for i in $(seq 1 120); do curl -fsS -o /dev/null http://localhost:4321 && break; sleep 1; done; ' +
      "trap 'pnpm run preview stop >/dev/null 2>&1 || true' EXIT; " +
      'while true; do sleep 5; done',
    url: 'http://localhost:4321',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
