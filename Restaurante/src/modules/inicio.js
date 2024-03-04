export default (function Inicio() {
  let home = document.createElement("div");
  let texto = document.createElement("div");
  let titulo = document.createElement("h1");
  let titulo2 = document.createElement("h2");

  home.id = "home";
  home.classList += "container";
  texto.id = "texto";
  titulo.innerText = "JulitoMuxik";
  titulo2.innerText = "Restaurante de Comidas Rapidas";

  texto.appendChild(titulo);
  texto.appendChild(titulo2);
  home.appendChild(texto);

  return home;
})();
