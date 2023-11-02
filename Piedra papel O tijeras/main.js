//  variables de inicio del juego 
let playerScore = 0;
let computerScore = 0;
let rounds = '';

/**
 * Juega una ronda de piedra, papel y tijeras entre un jugador y una computadora.
 *
 * @param {string} playerSelection - La selección del jugador ('PIEDRA', 'PAPEL' o 'TIJERAS').
 * @param {string} computerSelection - La selección de la computadora ('PIEDRA', 'PAPEL' o 'TIJERAS').
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    rounds = 'empate';
  } 
  if (
    (playerSelection === 'PIEDRA' && computerSelection === 'TIJERAS') ||
    (playerSelection === 'PAPEL' && computerSelection === 'PIEDRA') ||
    (playerSelection === 'TIJERAS' && computerSelection === 'PAPEL')
  ) {
    playerScore++
    rounds = 'player';
  } 
  if(
    (computerSelection === 'PIEDRA' && playerSelection === 'TIJERAS') ||
    (computerSelection === 'PAPEL' && playerSelection === 'PIEDRA') ||
    (computerSelection === 'TIJERAS' && playerSelection === 'PAPEL')
    ) {
      computerScore++
      rounds = 'computer';
    }
  updateScoreMessage(rounds, playerSelection, computerSelection);
}

/**
 * Genera una elección aleatoria entre 'PIEDRA', 'PAPEL' o 'TIJERAS'.
 *
 * @return {string} La elección generada aleatoriamente.
 */
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0 :
        return 'PIEDRA';
      case 1:
        return 'PAPEL';
      case 2:
        return 'TIJERAS';
    }
}

/**
 * Verifica si el juego ha terminado.
 *
 * @return {boolean} Devuelve true si playerScore o computerScore es igual a 3, de lo contrario devuelve false.
 */
function isGameOver() {
  return playerScore === 3 || computerScore === 3;
}

// manipulación del Dom
const scoreInfo = document.getElementById('textoInfo');
const scoreMessage = document.getElementById('textoMessage');
const playerScoreGame = document.getElementById('puntajeHumano');
const computerScoreGame = document.getElementById('puntajeMaquina');
const playerSign = document.getElementById('humano');
const computerSign = document.getElementById('maquina');
const piedraBtn = document.getElementById('piedraBtn');
const papelBtn = document.getElementById('papelBtn');
const tijeraBtn = document.getElementById('tijerasBtn');
const endgameModal = document.getElementById('finGameModal')
const endgameMsg = document.getElementById('finGameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

piedraBtn.addEventListener('click', () => handleClick('PIEDRA'));
papelBtn.addEventListener('click', () => handleClick('PAPEL'));
tijeraBtn.addEventListener('click', () => handleClick('TIJERAS'));
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

/**
 * Maneja el evento de clic del jugador para su selección.
 *
 * @param {string} playerSelection - La selección del jugador.
 * @return {undefined} Esta función no devuelve ningún valor.
 */
function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }
  
  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if(isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}

/**
 * Actualiza las opciones elegidas por el jugador y la computadora.
 *
 * @param {string} playerSelection - La opción elegida por el jugador.
 * @param {string} computerSelection - La opción elegida por la computadora.
 */
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'PIEDRA':
      playerSign.textContent = '🙅🏽‍♂️✊🏽';
      break;
    case 'PAPEL':
      playerSign.textContent = '🙅🏽‍♂️🖐🏽';
      break;
    case 'TIJERAS':
      playerSign.textContent = '🙅🏽‍♂️✌🏽';
      break;
  }

  switch (computerSelection) {
    case 'PIEDRA':
      computerSign.textContent = '💻✊🏻';
      break;
    case 'PAPEL':
      computerSign.textContent = '💻🖐🏻';
      break;
    case 'TIJERAS':
      computerSign.textContent = '💻✌🏻';
      break;
  }
}

/**
 * Actualiza la información de puntuación según la ronda actual.
 *
 * @return {void} Esta función no devuelve nada.
 */
function updateScore(){
  if(rounds === 'empate') {
    scoreInfo.textContent = 'Haz Empatado';
  } else if(rounds === 'player') {
    scoreInfo.textContent = 'Haz Ganado';
  } else if(rounds === 'computer') {
    scoreInfo.textContent = 'Haz Perdido';
  }
  
  playerScoreGame.textContent =`Jugador: ${playerScore}`;
  computerScoreGame.textContent = `Computadora: ${computerScore}`;
}

/**
 * Actualiza el mensaje de puntuación en función del ganador y las selecciones.
 *
 * @param {string} winner - El ganador del juego.
 * @param {string} playerSelection - La selección del jugador.
 * @param {string} computerSelection - La selección de la computadora.
 */
function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)
    } vence a las ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)
    } pierde contra ${computerSelection.toLowerCase()}`
    return
  }
  scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)
  } iguala con ${computerSelection.toLowerCase() }`
}

/**
 * Capitaliza la primera letra de una cadena y convierte el resto a minúsculas.
 *
 * @param {string} string - La cadena de entrada a ser capitalizada.
 * @return {string} La cadena capitalizada.
 */
function capitalizeFirstLetter(string)  {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

 // Abre el modal de fin de juego agregando la clase 'active' tanto al elemento endgameModal como al elemento overlay.
function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

//Cierra el modal de fin de juego y elimina la clase 'active' del overlay.
function closeEndgameModal(){
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

/**
 * Establece el mensaje final según los puntos del jugador y la computadora.
 *
 * @return {string} El mensaje final que indica si el jugador ha ganado o perdido.
 */
function setFinalMessage() {
  return playerScore > computerScore
  ? (endgameMsg.textContent = 'Haz Ganado')
  : (endgameMsg.textContent = 'Haz Perdido')
}

/**
 * Reinicia el juego restableciendo las puntuaciones del jugador y la computadora, actualizando la información de puntuación,
 * restableciendo el mensaje de puntuación, actualizando las puntuaciones del juego del jugador y de la computadora,
 * restableciendo los signos del jugador y de la computadora, y eliminando la clase activa del modal de juego y la superposición.
 *
 * @return {void} Esta función no devuelve nada.
 */
function restartGame() {
  playerScore = 0;
  computerScore = 0 ; 
  scoreInfo.textContent = 'Intenta nuevamente'
  scoreMessage.textContent = 'El primero en realizar 3 puntos gana'
  playerScoreGame.textContent = 'Player: 0'
  computerScoreGame.textContent = 'Computer: 0'
  playerSign.textContent = '🙅🏽‍♂️'
  computerSign.textContent = '💻'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}