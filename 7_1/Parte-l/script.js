function fatorial(num) {
  if (num === 0 || num === 1){console.log("Por favor, digite algo logico..")}
  else {for (let i = num - 1; i >= 1; i--) num = num * i;console.log(num)}
}
fatorial(5);