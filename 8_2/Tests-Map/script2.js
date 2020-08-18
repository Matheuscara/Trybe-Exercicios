const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (array1, array2) => {
  return array1.map((elemento, index) => (
    { [elemento]: array2[index] }
  ));
};

const jogosQueAmo = ['dark Souls', 'God of War', 'League of legends']

const tempoDeHoras = [107,245,5463]

const listDHorasDosMelhoresGamesDoMundo = updateProducts(jogosQueAmo, tempoDeHoras);

const listProducts = updateProducts(products, prices);


console.table(listProducts)

console.table(listDHorasDosMelhoresGamesDoMundo)