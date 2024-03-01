const btn_jugadores = document.getElementById("multiJugador");
const btn_computadora = document.getElementById("computadora");
const btn_facil = document.getElementById("facil");
const btn_normal = document.getElementById("normal");
let rival = "MultiJugador";
let nivel = "Facil";

btn_jugadores.style.backgroundColor = "#38a5ff";
btn_facil.style.backgroundColor = "#e49595";

btn_computadora.addEventListener("click", (e) => {
  cambiarColorBtn(btn_jugadores, e.target, "rgb(56, 165, 255)");
  rival = e.target.textContent;
});

btn_jugadores.addEventListener("click", (e) => {
  cambiarColorBtn(btn_computadora, e.target, "rgb(56, 165, 255)");
  rival = e.target.textContent;
});

btn_normal.addEventListener("click", (e) => {
  cambiarColorBtn(btn_facil, e.target, "rgb(228, 149, 149)");
  nivel = e.target.textContent;
});

btn_facil.addEventListener("click", (e) => {
  cambiarColorBtn(btn_normal, e.target, "rgb(228, 149, 149)");
  nivel = e.target.textContent;
});

function cambiarColorBtn(button1, button2, color) {
  if (button1.style.backgroundColor === color) {
    button1.style.backgroundColor = "#EBEBF2";
    button2.style.backgroundColor = color;
  }
}

// Juego de Tic tac toe
const displayPlayer = document.getElementById("displayPlayer");
const cells = document.querySelectorAll(".cell");

let board = ["", "", "", "", "", "", "", "", ""];
let players = {
  X: '<i class="fas fa-times"></i>',
  O: '<i class="fas fa-circle"></i>',
};
let currentPlayer = players.X;
let isJuegoActivo = true;

const JugadorX = "✖️ Gana";
const JugadorO = "⭕ Gana";
const Empate = "Empate";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function validationResultado() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningCombinations[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    anunciar(currentPlayer === players.X ? players.X : players.O);
    isJuegoActivo = false;
    return;
  }

  if (!board.includes("")) {
    anunciar(Empate);
  }
}

const anunciar = (type) => {
  switch (type) {
    case players.X:
      modalOpen(JugadorX);
      break;
    case players.O:
      modalOpen(JugadorO);
      break;
    case Empate:
      modalOpen(Empate);
      break;
  }
};

const isValidAction = (title) => {
  if (title.innerHTML !== "") {
    return false;
  }
  return true;
};

const actualizarBoard = (index) => {
  board[index] = currentPlayer;
};

const cambiarJugador = () => {
  currentPlayer = currentPlayer === players.X ? players.O : players.X;
  displayPlayer.innerHTML = currentPlayer;
};

const usuarioActivo = (cell, index) => {
  if (isValidAction(cell) && isJuegoActivo) {
    cell.innerHTML = currentPlayer;
    actualizarBoard(index);
    validationResultado();
    cambiarJugador();
  }

  if (rival === "Computadora") {
    blockCell(true);
    setTimeout(optionComputer(), 500);
  }
};
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => usuarioActivo(cell, index));
});

// modal
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
const resetModal = document.getElementById("resetBtnModal");

const modalOpen = (text) => {
  modalContainer.style.opacity = 1;
  modalContainer.style.visibility = "visible";
  let winner = modal.children[0];
  let newModal = document.createElement("div");
  newModal.innerHTML = text;
  winner.appendChild(newModal);
  modal.classList.toggle("cerrar-modal");
};

function modalCerrar() {
  modalContainer.style.opacity = 0;
  modalContainer.style.visibility = "hidden";
  modal.classList.toggle("cerrar-modal");
}

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalCerrar();
  }
});

resetModal.addEventListener("click", () => {
  reiniciarJuego();
  modalCerrar();
});

// reiniciar
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
  isJuegoActivo = true;
  board = ["", "", "", "", "", "", "", "", ""];

  let displaySon = displayPlayer.children[0];
  if (displaySon != undefined) {
    displayPlayer.removeChild(displaySon);

    modal.children[0].removeChild(modal.children[0].lastChild);

    cells.forEach((cell, index) => {
      let children = cell.children;

      if (children.length !== 0) {
        cell.removeChild(children[0]);
      }
    });
  }
}

// opciones de pc
function optionComputer() {
  const cellsArr = Array.from(cells);
  let empateCells = cellsArr.filter((x) => {
    return x.innerHTML === "";
  });

  let option = getRandom(0, empateCells.length);
  let cell = cellsArr.indexOf(empateCells[option]);

  if (isJuegoActivo) {
    cells[cell].innerHTML = currentPlayer;
    actualizarBoard(cell);
    validationResultado();
    cambiarJugador();
  }
  blockCell(false);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function blockCell(valid) {
  cells.forEach((x) => (x.style.pointerEvents = valid ? "none" : ""));
}
