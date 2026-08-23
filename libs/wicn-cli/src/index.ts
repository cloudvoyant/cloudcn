#!/usr/bin/env node
import { createRequire } from 'node:module';
import { Command } from 'commander';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const program = new Command();
program
  .name('wicn')
  .description('wicn CLI')
  .version(version)
  .action(() => {
    console.log('hello');
  });

program.parse();
