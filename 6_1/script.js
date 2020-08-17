const required = document.querySelectorAll("[required]")
console.log(required)

for ( requireds of required ){
  requireds.addEventListener("invalid", event => {
   const requireds = event.target

   function verifyErrors(){
     let foundError = false;

     for(error in requireds.validity){
      console.log(error)
     }

     return foundError
   }
   
   verifyErrors()

   //trocar msg de required
   requireds.setCustomValidity("vai se fuder fdp")
  })
}





































document.querySelector("form").addEventListener("submit", event => {
  console.log("enviar o formulario")

  event.preventDefault()
})