let btnEnv = document.getElementById("btnEnviar");

let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");

rotulo.innerHTML = "Ingrese base:  ";
//… funcionalidad de ingreso de datos …
rotulo1.innerHTML = "Ingrese altura: ";

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:

  let Area: number = Number(dato.value) * Number(dato1.value);

  console.log("El resultado es ", Area);
});
