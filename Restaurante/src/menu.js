function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem(
    "Hamburguesa",
    "Hamburguesa con queso, lechuga, doble carne, cebolla y salsas de la casa",
    "cerveza de limón o Jugo al gusto"
  ));

  menu.appendChild(createMenuItem(
    "Hot Dog",
    "pan de la casa, Salchicha rancheras, cebolla y tomate con salsas de la casa",
    "Jugo al gusto o Gaseosa 0.5L"
  ));

  menu.appendChild(createMenuItem(
    "Ensalada",
    "Lechuga, tomate, pimiento y queso",
    "Jugo al gusto o Gaseosa 0.5L"
  ));

  menu.appendChild(createMenuItem(
    "Carne de Bufalo",
    "Carne de bufalo cortada en tiras, ensalada, salsa de la casa y papas fritas",
    "cerveza al gusto y limonada de coco "
  ));

  return menu;
}

function createMenuItem(name, description, bebida) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const nombreComida = document.createElement("h3");
  nombreComida.textContent = name;

  const descripComida = document.createElement("p");
  descripComida.textContent = description;

  const bebidaComida = document.createElement("p");
  bebidaComida.textContent = bebida;

  const imagenComida = document.createElement("img");
  imagenComida.src = `../dist/img/${name}.jpg`;
  imagenComida.alt = `${name}`;

  menuItem.appendChild(imagenComida);
  menuItem.appendChild(nombreComida);
  menuItem.appendChild(descripComida);
  menuItem.appendChild(bebidaComida);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;