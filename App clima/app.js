const api_key = '39b6aa1562f8de2a3648d50eb821fc93';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const botonBuscar = document.getElementById('btnBuscar');
const inputCiudad = document.getElementById('inputCiudad');
let difKelvin = 273.15;

botonBuscar.addEventListener('click', () => {
  const ciudad = inputCiudad.value;
  if (ciudad) {
    fetchDatosSobreClima(ciudad)
  }
})

/**
 * Fetches weather data for a given city.
 * Obtiene los datos climáticos para una ciudad dada.
 * @param {string} ciudad - The name of the city.
 * @return {Promise} A promise that resolves to the weather data for the city.
 */
function fetchDatosSobreClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(respuesta => respuesta.json())
    .then(respuesta => mostrarClima(respuesta))
}

/**
 * Updates the weather information on the webpage.
  * Actualiza la información del clima en la página web.
 * @param {object} data - The weather data object.
 * @return {void} This function does not return anything.
 */
function mostrarClima(data) {
  const divDatosClima = document.getElementById('datoClima');
  divDatosClima.innerHTML = '';

  const ciudadNombre = data.name
  const nombrePais = data.sys.country
  const temperatura = data.main.temp - difKelvin
  const humeda = data.main.humidity
  const descripcion = data.weather[0].description
  const icono = data.weather[0].icon
    
  const tituloCiudad = document.createElement('h2');
  tituloCiudad.textContent = `${ciudadNombre}, ${nombrePais}`

  const infoTemperatura = document.createElement('p');
  infoTemperatura.textContent = `La temperatura es de:  ${Math.round(temperatura)}°C`

  const infoHumeda = document.createElement('p');
  infoHumeda.textContent = `La humedad es de: ${humeda}%`

  const imgIcono = document.createElement('img');
  imgIcono.src = `http://openweathermap.org/img/wn/${icono}@2x.png`

  const infoDescripcion = document.createElement('p');
  infoDescripcion.textContent = `La descripción del tiempo es: ${descripcion}`

  divDatosClima.appendChild(tituloCiudad)
  divDatosClima.appendChild(infoTemperatura)
  divDatosClima.appendChild(infoHumeda)
  divDatosClima.appendChild(imgIcono)
  divDatosClima.appendChild(infoDescripcion)
}