
    //EXERCICIO 1 --
    let palavra = ["arara", "sereia"]

    let checkPalindrome = str => str === str.split('').reverse().join('');
    const resultados = palavra.map(checkPalindrome);
    console.log(resultados)

    //EXERCICIO 2 --

    function testaMaior(numeros){
        let indiceMaior = 0;
        for(let indice in numeros){
            if (numeros[indiceMaior] < numeros[indice]){
                indiceMaior = indice;
            }
        }
        return indiceMaior;
    }
    console.log(testaMaior([2, 3, 6, 7, 10, 1]));

    //EXERCICIO 3 -- 
    function testaMenor(numeros){
        let indiceMaior = 0;
        for(let indice in numeros){
            if (numeros[indiceMaior] > numeros[indice]){
                indiceMaior = indice;
            }
        }
        return indiceMaior;
    }
    console.log(testaMenor([2, 4, 6, 7, 10, 0, -3]))

    //EXERCICIO 4 --
    function tsteMaiorPalavra(palavra){
        let indiceMaior = 0;
        for(let indice in palavra){
            if (palavra[indiceMaior] > palavra[indice]){
                indiceMaior = indice;
            }
        }
        return indiceMaior;
    }
    console.log(tsteMaiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

    //EXERCICIO 5 -- 
    function maisRepetido(numeros) {
        let contRepetido = 0;
        let contNumero = 0;
        let indexNumeroRepetido = 0;
        for (let index in numeros) {
          let verificaNumero = numeros[index];
          for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
              contNumero++;
            }
          }
          if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
          }
          contNumero = 0;
        }
        return numeros[indexNumeroRepetido];
      }
      
      console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

    //EXERCICIO 6

    function somaTodosNumeros(numeros) {
        let total = 0;
        for (let index = 1; index <= numeros; index++) {
          total = total + index;
        }
        return total;
      }
      console.log(somaTodosNumeros(5)); //15