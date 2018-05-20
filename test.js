const assert = require('assert');
const isDataURL = require('./');

describe('is-data-url', () => {
  it('should return true if it is a Data URL', () => {
    assert(isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo='));
  });

  it('should return false if it is not a Data URL', () => {
    assert(!isDataURL('data:foo'));
  });
});
