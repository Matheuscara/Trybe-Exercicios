const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
const myList = [1, 2, 3, 4]


// implemente seus testes aqui

//verifica no array se o retorno é o elemento correto
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

//verifica no array se o retorno é o elemento incorreto
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 2, 4]);

myRemoveWithoutCopy(myList,1)
assert.strictEqual(myList.length, 3)