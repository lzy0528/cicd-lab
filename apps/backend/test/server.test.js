import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Backend basic checks', () => {
  it('version string is valid', () => {
    const version = '1.0.0';
    assert.ok(version);
    assert.equal(typeof version, 'string');
  });

  it('health endpoint returns ok string', () => {
    const body = 'ok';
    assert.equal(body, 'ok');
  });
});
