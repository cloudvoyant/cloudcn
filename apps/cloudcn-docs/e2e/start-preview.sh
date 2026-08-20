#!/usr/bin/env bash
# Starts the Astro preview server for Playwright e2e tests and keeps it alive
# for the run. `astro preview` daemonizes when stdout is not a TTY (Playwright
# pipes it), so this wrapper holds the foreground and cleans the daemon up on
# exit — otherwise stale daemons get reused by Playwright (stale build) or
# block the port for the next run.
set -euo pipefail

cd "$(dirname "$0")/.."

stop_preview() {
  pnpm run preview stop >/dev/null 2>&1 || true
  # Kill any orphaned astro preview processes still holding the port.
  pkill -f "astro preview" 2>/dev/null || true
}

cleanup() {
  stop_preview
}
trap cleanup EXIT INT TERM

stop_preview
pnpm run build
pnpm run preview --port 4321 --background >/dev/null 2>&1 || true

for _ in $(seq 1 120); do
  if curl -fsS -o /dev/null http://localhost:4321; then
    break
  fi
  sleep 1
done

while true; do sleep 5; done
