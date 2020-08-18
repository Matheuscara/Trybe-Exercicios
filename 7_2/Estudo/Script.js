const meuStatus = {
  primeiroNome: "Matheus",
  idade: 19,
  trabalho: "",
  estudo: "Dev Web"
};  

// Alterando propriedade TRABALHO no MEUSTATUS

meuStatus.trabalho = "Professor"

//Adicionando propriedade SOBRENOME no MEUSTATUS

meuStatus.sobrenome = "Dias Cara"

//Adicionando Propriedade NOMECOMPLETO no MEUSTATUS

meuStatus.nomeCompleto = `${meuStatus.primeiroNome} ${meuStatus.sobrenome}`

const addnovaKey = (objeto, key, value) => {
  objeto[key] = value;
  console.log(meuStatus)
};

// addnovaKey(meuStatus, 'estadoCivil', 'solteiro')


// CRIANDO UM OBJECT POR OBJECT.CREATE()

const objectCreate = Object.create({meuNome:"Matheus", sobrenome:"Dias Cara"})

console.log(`Eu sempre quis saber o meu nome, que é ${objectCreate.meuNome} ${objectCreate.sobrenome}`)

// CRIANDO UM OBJECT POR OBJECT.CREATE() VAZIL COM ToString()

const objectCreatePrototype = Object.create(Object.prototype)

objectCreatePrototype.edition = "Limitada"

console.log(objectCreatePrototype.edition)

// CRIANDO UMA PROPRIEDADE COM USO RESERVADO DE PALAVRA EX="CLASS, VAR" (SOMENTE NO ES5)

const objectCreateReservate = Object.create({var:"viu meninas", class:"olha dnv kk"})

console.log(objectCreateReservate["class"])

// Criando um Object numeravel 

var o = { y:2332, z:33232, c:432323 }

for(x in meuStatus)console.log(x)
  
