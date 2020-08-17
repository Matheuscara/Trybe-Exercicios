const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
myRemove([1, 2, 3, 4], 3)

const list = [5, 4, 3, 2, 1];
myRemove(list, 5);
// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])

assert.deepStrictEqual(list, [5, 4, 3, 2, 1]);
