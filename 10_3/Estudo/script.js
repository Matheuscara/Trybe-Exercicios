const randomNumber = (number) => Math.floor(Math.random(number) * 20)  // Lógica de gerar o número
const isDivisible = (number) => (randomNumber() % number) === 0


module.exports = isDivisible();
