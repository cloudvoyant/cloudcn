import { describe, it, expect } from 'vitest';
import { helloReact } from '../src/index';

describe('helloReact', () => {
  it('returns the helloReact greeting', () => {
    expect(helloReact()).toBe('helloReact');
  });
});
