//creacion de variable 
const contenedores = document.querySelectorAll('.contenedor');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', () => {
        removerClaseActivo()
        contenedor.classList.add('activo');
        });
});

//  Elimina la clase 'activo' de todos los elementos con la clase 'contenedor'.
function removerClaseActivo(){
    contenedores.forEach(contenedor => {
        contenedor.classList.remove('activo');
    });
}