

//LOP for in 

const pessoa = {
    nome: 'Jhonatan',
    indade:25
}

for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho', 'Azul','Vermelho']

for (let indice in cores ) {
    console.log(indice,cores[indice])
}

//LOP-off