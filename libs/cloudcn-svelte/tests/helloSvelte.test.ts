import { describe, it, expect } from 'vitest';
import { helloSvelte } from '../src/index';

describe('helloSvelte', () => {
  it('returns the helloSvelte greeting', () => {
    expect(helloSvelte()).toBe('helloSvelte');
  });
});
