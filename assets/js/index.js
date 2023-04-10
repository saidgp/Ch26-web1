console.log("session web1");

function changeName(){
  // obtener nombre cliente 
   document.getElementById("greeting").innerHTML= "Hola " + getName();
  // ibtener referencia de label H1

  // camniar el nombre


}

function getName(){
  const clientName = prompt("Escribe tu nombre ");
  return clientName;
}
