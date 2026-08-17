# User Guide

> Placeholder — explain how to install and use `cloudcn`. Replace this file with real usage docs.

## Requirements

<!-- TODO: tools, versions, and setup a user needs before using cloudcn. -->

## Getting Started

<!-- TODO: the minimal steps to install and run cloudcn. -->

## Usage

<!-- TODO: common commands, options, and examples. -->

## Workspace (pnpm monorepo)

cloudcn is a pnpm workspace monorepo:

- Install everything: `mise run install`
- Build all packages: `mise run build`
- Test all packages: `mise run test`
- Lint/format all packages: `mise run lint`, `mise run format:check`
- Run the docs placeholder: `pnpm --filter cloudcn-docs run dev`
- Show the current version: `mise run version`
- Set the lockstep version across all packages: `mise run set-version <version>`

All packages share one lockstep version from `version.txt`; the project stays at v0 until the release-rule cap is deliberately removed.

