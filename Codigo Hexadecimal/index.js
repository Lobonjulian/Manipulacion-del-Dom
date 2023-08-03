// selecionar los elementos del dom
const boton = document.querySelector('btn') 
const color = document.getElementById('color')

//cambio de colores Gracias a Math.random
function generadorColor() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6.; i++) {
        let indiceRandom = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceRandom];
    }

    return colorHex
}

btn.addEventListener('click', function(){ 
    let colorAleatorio = generadorColor();
    //actualiza el texto 
    color.textContent = colorAleatorio;
    //actualiza el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
    //actualiza el color del boton
    document.getElementById('btn').style.backgroundColor = colorAleatorio;
});