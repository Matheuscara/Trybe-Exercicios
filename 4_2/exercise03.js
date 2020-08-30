// Para o terceiro exercício, calcule e imprima a 
// média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let result = 0;

for (index in numbers) {
  sum += numbers[index];
  result = sum / numbers.length;
}

console.log(result)

