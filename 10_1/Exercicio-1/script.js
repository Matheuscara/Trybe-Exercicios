function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'parameters must be numbers';
  }
  return a + b;
}

module.exports = sum;