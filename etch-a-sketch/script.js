const container = document.querySelector(".container");

let btnChangeSize = document.querySelector(".botonSize");
let btntogleColor = document.querySelector(".botonColor");
let mode = 0;

btnChangeSize.addEventListener("click", changeSize);
btntogleColor.addEventListener("click", toggleHandler);

function changeColorOscuro(e) {
  e.target.style.backgroundColor = "gray";
}

function changeMulticolor(e) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  e.target.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function createCuadro(size, eventFunction) {
  let dimensity = 768 / size;

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      let cuadros = document.createElement("div");
      cuadros.classList.add("cuadros");
      cuadros.style.height = dimensity + "px";
      cuadros.style.width = dimensity + "px";
      cuadros.addEventListener("mouseover", eventFunction);
      row.appendChild(cuadros);
    }

    container.appendChild(row);
  }
}

function changeSize() {
  let size = prompt("Cual es el nuevo tamaño");
  console.log(size);
  if ((size < 1) | (size > 100)) {
    return null;
  }
  remover();
  createCuadro(size, changeColorOscuro);
}

function remover() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function toggleHandler() {
  let size = container.childElementCount;
  remover();
  if (mode === 0) {
    createCuadro(size, changeMulticolor);
    mode = 1;
  } else {
    createCuadro(size, changeColorOscuro);
    mode = 0;
  }
}

createCuadro(16, changeColorOscuro);
