const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

/** Verifies that the page uses only the font allowed by the course. */
test('The global stylesheet uses only Raleway', () => {
  assert.match(readFileSync('styles/global.css', 'utf8'), /font-family:\s*Raleway\s*;/, 'The global stylesheet contains a forbidden alternative font');
});
