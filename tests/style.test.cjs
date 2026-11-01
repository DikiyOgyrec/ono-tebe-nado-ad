const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

/** Verifies every explicit font declaration against the course requirement. */
test('The page stylesheet explicitly uses the required Raleway font', () => {
  assert.equal([...readFileSync('styles/style.css', 'utf8').matchAll(/font-family:\s*([^;]+);/g)].every((declaration) => declaration[1].includes('Raleway')), true, 'The page stylesheet declares a forbidden font value');
});
