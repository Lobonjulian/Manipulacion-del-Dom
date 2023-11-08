function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const imagenBar = document.createElement("img");
  imagenBar.src = "../dist/img/bannerPrincipal.jpg";
  imagenBar.alt = "bar"

  home.appendChild(createParrafo('Bienvenido a RestauranteBar'))
  home.appendChild(createParrafo('Disfruta de la mejor comida y Bebidas'))
  home.appendChild(imagenBar);
  home.appendChild(createParrafo('Ordena en Linea o visitanos para tener el placer de atenderte'))

  return home;
}

function createParrafo(texto) {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;