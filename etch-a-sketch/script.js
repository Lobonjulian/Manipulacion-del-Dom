const container = document.querySelector(".container");

let btnChangeSize = document.querySelector("button");

btnChangeSize.addEventListener("click", changeSize);

function changeColor(e) {
  e.target.style.backgroundColor = "gray";
}

function createCuadro(size) {
  let dimensity = 768 / size;

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      let cuadros = document.createElement("div");
      cuadros.classList.add("cuadros");
      cuadros.style.height = dimensity + "px";
      cuadros.style.width = dimensity + "px";
      cuadros.addEventListener("mouseover", changeColor);
      row.appendChild(cuadros);
    }

    container.appendChild(row);
  }
}

function changeSize() {
  let size = prompt("Cual es el nuevo tamaño");
  console.log(size);
  if ((size < 1) | (size > 64)) {
    return null;
  }
  removeGrid();
  createCuadro(size);
}

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

createCuadro(16);
