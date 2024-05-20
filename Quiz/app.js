const quizCuestionario = [
  {
    pregunta: '¿Cuántos jugadores hay en cada equipo de fútbol?',
    opciones: [10, 12, 11, 13],
    respuesta: 11,
  },
  {
    pregunta: '¿Cuál es el objetivo del juego?',
    opciones: [
      'Marcar más goles que el equipo contrario',
      'Marcar menos goles que el equipo contrario',
      'Mantener el balón en posesión durante el mayor tiempo posible',
      'Evitar que el equipo contrario marque goles',
    ],
    respuesta: 'Marcar más goles que el equipo contrario',
  },
  {
    pregunta: 'Cuánto tiempo dura un partido de fútbol?',
    opciones: ['90 minutos', '120 minutos', '150 minutos', '180 minutos'],
    respuesta: '90 minutos',
  },
  {
    pregunta: 'Cuáles son las dimensiones del campo de fútbol?',
    opciones: [
      '100 yardas de largo y 53 yardas de ancho',
      '120 yardas de largo y 60 yardas de ancho',
      '130 yardas de largo y 70 yardas de ancho',
      '140 yardas de largo y 80 yardas de ancho',
    ],
    respuesta: '100 yardas de largo y 53 yardas de ancho',
  },
  {
    pregunta:
      '¿Cuál de los siguientes equipos ha ganado más Copas del Mundo de la FIFA?',
    opciones: ['Brasil', 'Italia', 'Argentina', 'Portugal'],
    respuesta: 'Brasil',
  },
  {
    pregunta: '¿En qué año se celebró la primera Copa Mundial de la FIFA?',
    opciones: ['1930', '1950', '1970', '1990'],
    respuesta: '1930',
  },
  {
    pregunta:
      '¿Cuántas veces ha ganado la selección de Alemania la Copa Mundial de la FIFA?',
    opciones: ['2', '3', '4', '5'],
    respuesta: '4',
  },
  {
    pregunta:
      '¿Quién ha sido el máximo goleador en la historia de los mundiales de fútbol?',
    opciones: ['Pele', 'Miroslav Klose', 'Ronaldo Nazario', 'Lionel Messi'],
    respuesta: 'Miroslav Klose',
  },
  {
    pregunta:
      '¿Qué jugador ha ganado más Balones de Oro en la historia del fútbol?',
    opciones: [
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Michel Platini',
      'Johann Cruyf',
    ],
    respuesta: 'Lionel Messi',
  },
];

let score = 0;
let preguntaActual = 0;
let tiempoRestante = 30;
let timerInterval;

function startQuiz() {
  document.getElementById('boton-inicio').style.display = 'none';
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const question = quizCuestionario[preguntaActual];
  const questionText = document.getElementById('cuestionario-texto');
  const botonRespuesta = document.getElementById('btn-correctAnswer');

  questionText.innerHTML = '';
  botonRespuesta.innerHTML = '';

  questionText.innerHTML = question.pregunta;

  question.opciones.forEach((opcion) => {
    const buttonOpc = document.createElement('button');
    buttonOpc.textContent = opcion;
    buttonOpc.classList.add('btn-correctAnswer');
    botonRespuesta.appendChild(buttonOpc);

    buttonOpc.addEventListener('click', function () {
      checkAnswer(opcion);

      if (preguntaActual === quizCuestionario.length ) {
        document.getElementById('btn-correctAnswer').style.display = 'none';
      }
    });
  });
}

function checkAnswer(seleccionarRespuesta) {
  const question = quizCuestionario[preguntaActual];

  if (seleccionarRespuesta === question.respuesta) {
    score++;
  }

  preguntaActual++;

  if (preguntaActual < quizCuestionario.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    tiempoRestante--;

    document.getElementById('tiempo').textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      displayScore();
    }
  }, 1000);
}

function displayScore() {
  clearInterval(timerInterval);

  const scorePercent = (score / quizCuestionario.length) * 100;

  const scoreText = document.getElementById('cuestionario-texto');
  scoreText.innerHTML = `
    <h2>¡Prueba Completada!</h2>
    <p>Tu score: ${score} / ${quizCuestionario.length}</p>
    <p>Tu porcentaje: ${scorePercent}%</p>
  `;
}

document.getElementById('boton-inicio').addEventListener('click', startQuiz);
