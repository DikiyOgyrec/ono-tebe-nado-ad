const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

/** Verifies the standalone repository URL required by the submission checker. */
test('The readme provides the repository URL on its own line', () => {
  assert.match(readFileSync('README.md', 'utf8'), /^https:\/\/github.com\/DikiyOgyrec\/ono-tebe-nado-ad\r?$/m, 'The readme does not provide a standalone repository URL');
});
