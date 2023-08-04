/**
 * The function `selecionarModo` changes the background color, background image, and title of an
 * element based on the selected mode.
 * @param modo - The parameter "modo" is a string that represents the mode to be selected. It can have
 * three possible values: "claro" (light mode), "degradado" (gradient mode), or any other value (dark
 * mode).
 */
function selecionarModo(modo) {
    
    let color = "black";
    let imagen = "claro";
    let titulo = "oscuro";
    let colorImagen = ""

    if( modo === "claro"){
        color = "white";
        imagen = "claro";
        titulo = "Modo Claro";  
    } else if( modo === "degradado" ){
        colorImagen = "linear-gradient(to right top, #90867a, #a18877, #b48878, #c88780, #d98690, #e18294, #e97f99, #f96b82, #fb6471, #fb5f5f)";
        imagen = "claro";
        titulo = "Modo Degradado"; 
    }else {
        color = "gray";
        imagen = "claro";
        titulo = "Modo Oscuro"; 
    }
    document.getElementById("tema").style.backgroundColor = color ;
    document.getElementById("tema").style.backgroundImage = colorImagen;
    document.getElementById("titulo").innerHTML = titulo;
}