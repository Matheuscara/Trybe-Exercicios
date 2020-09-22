


  // // Common Matchers

const { notDeepEqual } = require("assert");

  
  // test('two plus two is four', () => {
  //   expect(2 + 2).toBe(4);
  // });

  // test('object assignment', () => {
  //   const data = {'one': 1};
  //   data['two'] = 2;
  //   expect(data).toEqual({one: 1, two: 2});
  // });

  // test('adding positive numbers is not zero', () => {
  //   for (let a = 1; a < 10; a++) {
  //     for (let b = 1; b < 10; b++) {
  //       expect(a + b).not.toBe(0);
  //     }
  //   }
  // });
  
  // //Numbers

  // test('two plus two', () => {
  //   const value = 2 + 2;
  //   expect(value).toBeGreaterThan(3);
  //   expect(value).toBeGreaterThanOrEqual(3.5);
  //   expect(value).toBeLessThan(5);
  //   expect(value).toBeLessThanOrEqual(4.5);
  
  //   // toBe and toEqual are equivalent for numbers
  //   expect(value).toBe(4);
  //   expect(value).toEqual(4);
  // });

  // test('null', () => {
  //   const n = 0.4 + 0.1;
  //   expect(n).toBeCloseTo(0.5)
  // });

  // //Strings

  test('there is no I in team', () => {
    expect('team').not.toMatch(/t/);
  });

  // test('there is no I in team', () => {
  //   expect('team').not.toMatch(/r/);
  // });

  // // Arrays and iterables

  // const shoppingList = [
  //   'diapers',
  //   'kleenex',
  //   'trash bags',
  //   'paper towels',
  //   'beer',
  // ];

  // test('the shopping list has beer on it', () => {
  //   expect(shoppingList).toContain('beer');
  //   expect(new Set(shoppingList)).toContain('beer');
  // });


  // const numberLuck = require('./Exercicio-1');

  // describe('Test Exercise 1', () => {
  //   numberLuck = jest.fn().mockReturnValue(10)
  //   numberLuck()
  // })