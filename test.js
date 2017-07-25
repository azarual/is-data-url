var assert = require('assert');
var isDataURL = require('./');

it('should return true if it is a Data URL', function () {
  assert(isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo='));
});

it('should return false if it is not a Data URL', function () {
  assert(!isDataURL('data:foo'));
});
