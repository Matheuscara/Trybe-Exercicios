const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parametros precisam ser numeros!!');
  } return a + b;
}

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
