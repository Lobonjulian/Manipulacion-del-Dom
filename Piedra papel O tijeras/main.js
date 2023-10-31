//  variables de inicio del juego 
let playerScore = 0;
let computerScore = 0;
let rounds = '';

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Empate';
  } else if (
    (playerSelection === 'piedra' && computerSelection === 'tijera') ||
    (playerSelection === 'papel' && computerSelection === 'piedra') ||
    (playerSelection === 'tijera' && computerSelection === 'papel')
  ) {
    playerScore++;
    rounds = 'Ganaste esta Partida';
  } else {
    computerScore++;
    rounds = 'Perdiste la Partida';
  }

}

// devuelve un valor aleatorio entre piedra papel o tijera
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'piedra';
    } else if (randomNumber === 1) {
        return 'papel'; 
    }else {
        return 'tijera';
    }
}

// finaliza el juego después de 3 rondas ganadas 
function isGameOver() {
  return playerScore === 3 || computerScore === 3;
}