// apps/cloudcn-docs/playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:4321',
  },
  webServer: {
    command: 'pnpm run build && pnpm run preview --port 4321',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
