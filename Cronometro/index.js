const cronometro = document.getElementById('cronometro')
const btnInicioPausa = document.querySelector('#btn-inicio-pausa');
const btnReiniciar = document.querySelector('#btn-reinicio');

//almacenamiento del tiempo
let[segundos, minutos, horas] = [0, 0, 0];

let intervaloTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
  
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

//agrega un cero al lado izquierdo de ser necesario
const segundosFormato = asignarFormato(segundos);
const minutosFormato = asignarFormato(minutos);
const horasFormato = asignarFormato(horas)

//actualiza el contenido del cronometro
cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;

}

//f. para agregar un cero
function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo; 
}

//asignacion de las funciones 
btnInicioPausa.addEventListener('click', function () {
  if (estadoCronometro === 'pausado'){
    //llamada a cronometro en 1000 milisegundos
    intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
    //cambio de icono 
    document.getElementById('btn-inicio-pausa').innerHTML = '<i class="fa-solid fa-pause" id="btn-inicio-pausa"></i>';
    btnInicioPausa.classList.remove('iniciar')
    btnInicioPausa.classList.add('pausar')
    //actualiza el estado del cronometro
    estadoCronometro = 'enMarcha';
  }else {
    window.clearInterval(intervaloTiempo);
    //actualiza los botones y el estado del cronometro
    document.getElementById('btn-inicio-pausa').innerHTML = '<i class="fa-solid fa-play" id="btn-inicio-pausa"></i>';
    btnInicioPausa.classList.remove('pausar');
    btnInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
  
});

btnReiniciar.addEventListener('click', function() {
  //elimina el intervalo 
  window.clearInterval(intervaloTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById('cronometro').innerHTML = '00:00:00';

  //actualizar botones 
  document.getElementById('btn-inicio-pausa').innerHTML = '<i class="fa-solid fa-play" id="btn-inicio-pausa"></i>'
  btnInicioPausa.classList.remove('pausar');
  btnInicioPausa.classList.add('iniciar');

  //estado 
  estadoCronometro = 'pausado';
});