const sum = require('./Exercicio-1/script');
const myRemove = require('./Exercicio-2/script');
const myFizzBuzz = require('./Exercicio-3/script');


describe('Testando Exercicio 1', () => {

  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(sum(4,"5")).toBe('parameters must be numbers');
  });

})

describe('Testando Exercicio 2', () => {

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1,2,4])
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
  });
    
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
  });
})

describe('Testando Exercicio 3', () => {

  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz')
  })

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz')
  })

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(1)).toBe(1)
  })

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('false')).toBe(false)
  })
})