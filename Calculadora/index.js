//Funcion para generar un el modo claro u oscuro de la pagina
let body = document.querySelector("body");
let modoP = document.querySelector(".modoPagina");
modoP.onclick = () => {
  body.classList.toggle("light");
};

//muestra los datos que proporcionamos en la pantalla
let expresion = "";

function agregarNumero(numero) {
  expresion += numero;
  document.getElementById("pantalla").value = expresion;
}

function agregarOperador(operador) {
  expresion += operador;
  document.getElementById("pantalla").value = expresion;
}

//elimina todos los datos de la pantalla
function borrar() {
  expresion = "";
  document.getElementById("pantalla").value = "";
}

//realiza la operacion matematicas gracias a la funcion EVAL
function calcular() {
  try {
    const resultado = eval(expresion);
    document.getElementById("pantalla").value = resultado;
    expresion = "";
  } catch (error) {
    document.getElementById("pantalla").value = "Error";
  }
}