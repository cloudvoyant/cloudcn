// libs/cloudcn-core/tests/themes.test.ts
// Cross-check that every registered theme actually ships in the generated
// themes.css aggregate. Catches drift between src/themes/*.css and the THEMES
// registry (e.g. a commented-out theme block, like the anyscale one, would
// produce no rule after stripping comments).
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { THEMES } from 'cloudcn-core';

const themesCss = readFileSync(new URL('../src/themes.css', import.meta.url), 'utf8');

function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

// Matches the `.theme-{name}` class token on its own (not as a prefix of a
// longer class, e.g. `.theme-default-x`). Handles both the plain `.theme-{name} {`
// form and the default theme's `:where(:root, .theme-{name})` form.
function themeRule(name: string): RegExp {
  return new RegExp(`\\.theme-${name.replace(/\./g, '\\.')}(?![\\w-])`);
}

describe('themes registry', () => {
  it('every registered theme ships a `.theme-{name}` rule in themes.css', () => {
    const css = stripComments(themesCss);
    for (const { name } of THEMES) {
      expect(css).toMatch(themeRule(name));
      expect(css).toMatch(themeRule(`${name}.dark`));
    }
  });

  it('themes.css block comments are balanced', () => {
    const opens = (themesCss.match(/\/\*/g) ?? []).length;
    const closes = (themesCss.match(/\*\//g) ?? []).length;
    expect(opens).toBe(closes);
  });
});
