import Hamburguesa from "../assets/hamburguesa.jpg";

export default (function About() {
  const about = document.createElement("div");
  const titulo = document.createElement("h1");
  const texto = document.createElement("p");
  const imagenContainer = document.createElement("div");
  const imagen = document.createElement("img");

  about.id = "about";
  about.classList += "about";
  titulo.textContent = "Sobre Nosotros";
  texto.textContent =
    "Comidas  Rápidas auténticas en un ambiente hogareño,estamos ubicados en la hermosa ciudad de Palmira.";
  imagenContainer.classList += "imagen, about";
  imagen.src = Hamburguesa;
  imagen.alt = "Imagen de la Comida Rápidas";

  imagenContainer.append(imagen);
  about.appendChild(titulo);
  about.appendChild(texto);
  about.appendChild(imagenContainer);
  
  return about;
})();
