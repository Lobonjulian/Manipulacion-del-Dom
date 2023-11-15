/**
 * Calculates and displays the age in years, months, days, hours, minutes, and seconds
 * based on the provided birthdate.
 * Calcula y muestra la edad en años, meses, días, horas, minutos y segundos
  * basado en la fecha de nacimiento proporcionada.
 * @param {string} cumple - The birthdate in the format "YYYY-MM-DD".
 * @return {undefined} The function does not return a value.
 */
function calculadora() {
  setInterval(() => {
    let cumpleanos = new Date(document.getElementById("cumple").value);

    let nuevodato = new Date();
    let edadenTiempo = nuevodato.getTime() - cumpleanos.getTime();

    let edadensecundos = edadenTiempo / 1000;
    let edadenminuto = edadensecundos / 60;
    let edadenhoras = edadenminuto / 60;
    let edadendias = edadenhoras / 24;
    let edadenmeses = edadendias / 30.4375;
    let edadenAnos = edadenmeses / 12;

    document.querySelector("#ano").innerHTML =
      "Tienes " + Math.floor(edadenAnos) + " años.";
    document.querySelector("#mes").innerHTML =
      "Con " + Math.floor(edadenmeses % 12) + " meses.";
    document.querySelector("#dia").innerHTML =
      "y " + Math.floor(edadendias % 30.4375) + " días.";
    document.querySelector("#hora").innerHTML =
      "Con " + Math.floor(edadenhoras % 24);
    +" horas.";
    document.querySelector("#minuto").innerHTML =
      "y " + Math.floor(edadenminuto % 60);
    +" minutos.";
    document.querySelector("#secundos").innerHTML =
      "exactamente" + Math.floor(edadensecundos % 60);
    +" segundos de haber nacido.";
    document.querySelector("#secundos").style.borderBottom = "1px green solid";
  }, 1000);
}

/**
 * Resets the current page by reloading the window.
 * Reinicia la página actual recargando la ventana.
 * @param {none} - This function does not take any parameters.
 * @return {none} - This function does not return any value.
 */
function reset() {
  window.location.reload();
}