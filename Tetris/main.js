import "./style.css";
import {
  BLOCK_SIZE,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  MOVIMIENTO_FLECHAS,
  PIECES,
} from "./constant.js";

//  INICIALIZACION DEL CANVAS
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const $score = document.querySelector("span");
const $section = document.querySelector("section");
const sonido = new window.Audio("audio.mp3");

let score = 0;

canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

// Tablero
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
];

function createBoard(width, height) {
  return Array(height)
    .fill()
    .map(() => Array(width).fill(0));
}

// Piezas de Juego
const piece = {
  position: { x: 7, y: 7 },
  shape: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

// bucle del juego
let dropCounter = 0;
let lastTime = 0;

function actualizar(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;

  if (dropCounter > 1000) {
    piece.position.y++;
    dropCounter = 0;

    if (checkCollision()) {
      piece.position.y--;
      solidificarPiece();
      removeRows();
    }
  }

  dibujar();
  window.requestAnimationFrame(actualizar);
}

function dibujar() {
  // dibuja el tablero
  context.fillStyle = "#9ED2BE";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //muestra el tablero
  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        context.fillStyle = "#9DB2BF";
        context.fillRect(x, y, 1, 1);
      }
    });
  });

  // pintamos la pieza
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        context.fillStyle = "#61A3BA";
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
      }
    });
  });

  $score.innerText = score;
}

// movimiento con las flechas del teclado
document.addEventListener("keydown", (event) => {
  if (event.key === MOVIMIENTO_FLECHAS.LEFT) {
    piece.position.x--;
    if (checkCollision()) {
      piece.position.x++;
    }
  }

  if (event.key === MOVIMIENTO_FLECHAS.RIGHT) {
    piece.position.x++;
    if (checkCollision()) {
      piece.position.x--;
    }
  }

  if (event.key === MOVIMIENTO_FLECHAS.DOWN) {
    piece.position.y++;
    if (checkCollision()) {
      piece.position.y--;
      solidificarPiece();
      removeRows();
    }
  }

  // rotacion de piezas
  if (event.key === "ArrowUp") {
    const rotated = [];

    for (let i = 0; i < piece.shape[0].length; i++) {
      const row = [];

      for (let j = piece.shape.length - 1; j >= 0; j--) {
        row.push(piece.shape[j][i]);
      }

      rotated.push(row);
    }

    // comprobar si no hay espacio para rotar
    const previousShape = piece.shape;
    piece.shape = rotated;
    if (checkCollision()) {
      piece.shape = previousShape;
    }
  }
});

function checkCollision() {
  return piece.shape.find((row, y) => {
    return row.find((value, x) => {
      return (
        value === 1 && board[y + piece.position.y]?.[x + piece.position.x] !== 0
      );
    });
  });
}

function solidificarPiece() {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        board[y + piece.position.y][x + piece.position.x] = 1;
      }
    });
  });
  resetPiece();
}

function resetPiece() {
  //resetar posicion
  piece.position.x = Math.floor(BOARD_WIDTH / 2) - 2;
  piece.position.y = 0;

  //salida de diferentes piezas
  piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)];

  // gameOver
  if (checkCollision()) {
    window.alert("Haz Perdido");
    board.forEach((row) => row.fill(0));
    score = 0;
  }
}

function removeRows() {
  const rowsToRemove = [];

  board.forEach((row, y) => {
    if (row.every((value) => value === 1)) {
      rowsToRemove.push(y);
    }
  });

  rowsToRemove.forEach((y) => {
    board.splice(y, 1);
    const newRow = Array(BOARD_WIDTH).fill(0);
    board.unshift(newRow);
    score += 100;
  });
}

// inicio de Juego
$section.addEventListener("click", () => {
  actualizar();

  $section.remove();
  sonido.volume = 0.01;
  sonido.play();
});
