const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

/** Verifies the semantic sections of the auction page. */
test('The page provides the auction sections', () => {
  assert.match(readFileSync('index.html', 'utf8'), /<header[\s\S]*<main[\s\S]*id="lots"[\s\S]*id="about"[\s\S]*<footer/, 'The page is missing its semantic auction sections');
});

/** Verifies that visitors can reach all auction lots. */
test('The page provides three linked auction lots', () => {
  assert.equal((readFileSync('index.html', 'utf8').match(/class="card-link"/g) || []).length, 3, 'The page does not provide three linked lots');
});

/** Verifies that local styles are loaded in dependency order. */
test('The page loads fonts before global and page styles', () => {
  assert.match(readFileSync('index.html', 'utf8'), /fonts\/fonts.css[\s\S]*styles\/global.css[\s\S]*styles\/style.css/, 'The page loads its styles in the wrong order');
});

/** Verifies that additional lots can wrap without clipping. */
test('The lot list allows additional cards to wrap', () => {
  assert.match(readFileSync('styles/style.css', 'utf8'), /\.lots__card-list\s*\{[^}]*flex-wrap:\s*wrap/s, 'The lot list cannot wrap additional cards');
});

/** Verifies the project reference required by the course. */
test('The readme links to the project repository', () => {
  assert.match(readFileSync('README.md', 'utf8'), /https:\/\/github.com\/DikiyOgyrec\/ono-tebe-nado-ad/, 'The readme is missing the repository link');
});
