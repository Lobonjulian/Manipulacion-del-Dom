import quizCuestionario from "./data/data";

// variables para rastear los estados de la aplicacion
let score = 0;
let preguntaActual = 0;
let tiempoRestante = 10;
tiempoRestante * 60;
let timerInterval;

/**
 * Starts the quiz by hiding the start button, displaying the first question, and starting the timer.
 *Inicia el cuestionario ocultando el botón de inicio, mostrando la primera pregunta y comenzando el temporizador.
 */
function startQuiz() {
  document.getElementById("boton-inicio").style.display = "none";
  displayQuestion();
  startTimer();
}

/**
 * Displays a question in the quiz.
 * Muestra una pregunta en el cuestionario.
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function displayQuestion() {
  const question = quizCuestionario[preguntaActual];
  const questionText = document.getElementById("cuestionario-texto");
  const botonRespuesta = document.getElementById("btn-correctAnswer");

  questionText.innerHTML = "";
  botonRespuesta.innerHTML = "";

  questionText.innerHTML = question.pregunta;

  question.opciones.forEach((opcion) => {
    const buttonOpc = document.createElement("button");
    buttonOpc.textContent = opcion;
    buttonOpc.classList.add("btn-correctAnswer");
    botonRespuesta.appendChild(buttonOpc);

    buttonOpc.addEventListener("click", () => {
      checkAnswer(opcion);
    });
  });
}

/**
 * Checks the answer provided by the user and updates the score and current question accordingly.
 * Verifica la respuesta proporcionada por el usuario y actualiza la puntuacion y la pregunta actual en consecuencia.
 * @param {any} seleccionarRespuesta - The answer selected by the user. -La respuesta seleccionada por el usuario.
 */
function checkAnswer(seleccionarRespuesta) {
  const question = quizCuestionario[preguntaActual];

  if (seleccionarRespuesta === question.respuesta) {
    score++;
  }
  preguntaActual++;

  if (preguntaActual <= quizCuestionario.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

/**
 * Starts a timer that counts down the remaining time.
 * Inicia un temporizador que cuenta hacia atrás el tiempo restante.
 */
function startTimer() {
  timerInterval = setInterval(() => {
    tiempoRestante--;

    document.getElementById("tiempo").textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      displayScore();
    }
  }, 1000);
}

// Muestra el score del cuestionario.
function displayScore() {
  clearInterval(timerInterval);

  const scorePercent = (score / quizCuestionario.length) * 100;

  const scoreText = document.getElementById("cuestionario-texto");
  scoreText.innerHTML = `
    <h2>¡Prueba Completada!</h2>
    <p>Tu score: ${score} / ${quizCuestionario.length}</p>
    <p>Tu porcentaje: ${scorePercent}%</p>
  `;
}

// document.getElementById("boton-inicio").addEventListener("click", startQuiz);

// detener el juego
document.getElementById("boton-inicio").addEventListener("click", () => {
  window.clearInterval(intervaloTiempo);
  //actualiza los botones y el estado del cronometro
  document.getElementById("btn-inicio-pausa").innerHTML =
    '<i class="fa-solid fa-play" id="btn-inicio-pausa"></i>';
  btnInicioPausa.classList.remove("pausar");
  btnInicioPausa.classList.add("iniciar");
  estadoCronometro = "pausado";
});