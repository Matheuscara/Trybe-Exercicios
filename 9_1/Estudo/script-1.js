const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1),2000); 
pushNumber(numbers, 2);
pushNumber(numbers, 3);
pushNumber(numbers, 4);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 4, 1]),2000)