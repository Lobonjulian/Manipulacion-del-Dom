// Definir una preguntas  con posibles respuesta atravez de una  arrays
const quizCuestionario = [
    {
        pregunta: '¿Cuántos jugadores hay en cada equipo de fútbol?',
        opciones: [10, 12, 11, 13],
        respuesta: 11
    },
    {
        pregunta: '¿Cuál es el objetivo del juego?',
        opciones:[
            'Marcar más goles que el equipo contrario',
            'Marcar menos goles que el equipo contrario',
            'Mantener el balón en posesión durante el mayor tiempo posible',
            'Evitar que el equipo contrario marque goles'],
        respuesta: 'Marcar más goles que el equipo contrario'
    },
    {
        pregunta: 'Cuánto tiempo dura un partido de fútbol?',
        opciones: ['90 minutos','120 minutos','150 minutos','180 minutos'],
        respuesta: '90 minutos'
    },
    {
        pregunta: 'Cuáles son las dimensiones del campo de fútbol?',
        opciones:[
            '100 yardas de largo y 53 yardas de ancho',
            '120 yardas de largo y 60 yardas de ancho',
            '130 yardas de largo y 70 yardas de ancho',
            '140 yardas de largo y 80 yardas de ancho'],
        respuesta: '100 yardas de largo y 53 yardas de ancho'
    },
    {
        pregunta: '¿Cuál de los siguientes equipos ha ganado más Copas del Mundo de la FIFA?',
        opciones:['Brasil','Italia','Argentina','Portugal'],
        respuesta: 'Brasil'
    },
    {
        pregunta: '¿En qué año se celebró la primera Copa Mundial de la FIFA?',
        opciones: ['1930', '1950', '1970', '1990'],
        respuesta: '1930'
    },
    {
        pregunta: '¿Cuántas veces ha ganado la selección de Alemania la Copa Mundial de la FIFA?',
        opciones: ['2', '3', '4', '5'],
        respuesta: '4'
    },
    {
        pregunta: '¿Quién ha sido el máximo goleador en la historia de los mundiales de fútbol?',
        opciones: ['Pele', 'Miroslav Klose', 'Ronaldo Nazario', 'Lionel Messi'],
        respuesta: 'Miroslav Klose'
    }
];

// variables para rastear los estados de la aplicacion
let puntaje = 0;
let preguntaActual = 0;
let tiempoRestante = 15;
let timerInterval;

/**
 * Starts the quiz by hiding the start button, displaying the first question, and starting the timer.
 *Inicia el cuestionario ocultando el botón de inicio, mostrando la primera pregunta y comenzando el temporizador.
 */
function startQuiz() {
    document.getElementById('boton-inicio').style.display = 'none';
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
  const questionText = document.getElementById('cuestionario-texto');
  const botonRespuesta = document.getElementById('btn-correctAnswer');

  questionText.innerHTML = '';
  botonRespuesta.innerHTML = '';

  questionText.innerHTML = question.pregunta;

  question.opciones.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('btn-correctAnswer');
    botonRespuesta.appendChild(button);
  
    button.addEventListener('click', () => {
      checkAnswer(option);
    })
  })
}

/**
 * Checks the answer provided by the user and updates the score and current question accordingly.
 * Verifica la respuesta proporcionada por el usuario y actualiza el puntaje y la pregunta actual en consecuencia.
 * @param {any} selecionarRespuesta - The answer selected by the user. -La respuesta seleccionada por el usuario.
 */
function checkAnswer(selecionarRespuesta) {
  const question = quizCuestionario[preguntaActual];

  if(selecionarRespuesta === question.respuesta) {
    puntaje++;
  }

  preguntaActual++;

  if(preguntaActual < quizCuestionario.length) {
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

    document.getElementById('tiempo').textContent = tiempoRestante;

    if(tiempoRestante <= 0) {
      displayScore();
    }
  }, 1000);    
}

// Muestra el puntaje del cuestionario.
function displayScore() {
  clearInterval(timerInterval);

  const scorePercent = (puntaje / quizCuestionario.length) * 100;

  const scoreText = document.getElementById('cuestionario-texto');
  scoreText.innerHTML = `
    <h2>¡Prueba Completada!</h2>
    <p>Tu puntaje: ${puntaje} / ${quizCuestionario.length}</p>
    <p>Tu porcentaje: ${scorePercent}%</p>
  `;
}

document.getElementById('boton-inicio').addEventListener('click', startQuiz);