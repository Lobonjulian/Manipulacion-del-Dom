import "./index.html";
import "./style.css";
import About from "./modules/about";
import Inicio from "./modules/inicio";
import Menu from "./modules/menu";

const contenido = document.getElementById("content");
const btnHome = document.getElementById("home-btn");
const btnMenu = document.getElementById("menu-btn");
const btnAbout = document.getElementById("about-btn");

contenido.appendChild(Inicio);

btnHome.addEventListener("click", () => {
  showContent("home-btn");
});

btnMenu.addEventListener("click", () => {
  showContent("menu-btn");
});

btnAbout.addEventListener("click", () => {
  showContent("about-btn");
});

function showContent(currentTab) {
  while (contenido.lastChild) {
    contenido.removeChild(contenido.lastChild);
  }
  if (currentTab === "home-btn") contenido.appendChild(Inicio);
  else if (currentTab == "about-btn") contenido.appendChild(About);
  else if (currentTab == "menu-btn") contenido.appendChild(Menu);
}
