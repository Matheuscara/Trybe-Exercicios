const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  const value = Math.floor(Math.random() * maxTemperature)
  return value;
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    setTimeout(() =>{
        mensage = `Mars temperature is: ${getMarsTemperature()} degree Celsius`
        console.log(mensage)
    },messageDelay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo