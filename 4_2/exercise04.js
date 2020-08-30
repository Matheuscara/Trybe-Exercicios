// Com o mesmo código do exercício anterior, 
// caso valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let result = 0;

for (index in numbers) {
  sum += numbers[index];
  result = sum / numbers.length;
}

console.log(result)

if (result > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}
