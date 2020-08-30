
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);

    if (number > 10 || number <= 5 ) {
        return reject(number)
    }
    resolve(number);
})
.then(number => console.log(`Que sucesso =) nosso número foi ${number}`))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));