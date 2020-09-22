const alunos = [
    {nome:'Felipe',nota:50,status:''},
    {nome:'Felipe',nota:80,status:''},
    {nome:'Felipe',nota:40,status:''},
    {nome:'Felipe',nota:70,status:''},
    {nome:'Felipe',nota:90,status:''},
];

function fuctionStatus (alunos) {
    if(alunos.nota >= 60) {
        alunos.status = 'Aprovado';
    } else alunos.status = 'Reprovado';
};

alunos.forEach(fuctionStatus)

console.log(alunos)