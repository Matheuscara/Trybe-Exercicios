let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  //EXERCICIO 1 --

  console.log("Bem vinda, "+ info.personagem)

  //EXERCICIO 2 --

  info.recorrente="Sim"
  console.log(info)

  //Exercicio 3 --

  for (let Objetos in info){
    console.log(Objetos)
  }

  //EXERCICIO 4 --
  
  for (let Objetos in info){
    console.log(info[Objetos])
  }

  //EXERCICIO 5
  info.personagem="Margarida","Tio Patinhas"
  info.origem="Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
  info.nota="Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"
  info.personagem="Ambos recorrentes // Atenção para essa última linha!"

  