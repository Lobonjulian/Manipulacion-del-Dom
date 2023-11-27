const inputBox = document.querySelector(".input-password"),
  copiaPassword = document.querySelector(".fa-copy"),
  generateBtn = document.querySelector(".btnPassword"),
  length = 25;

const textoPasswordMinusculas = "abcdefghijklmnopqrstuvwxyz",
  textoPasswordMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  textoPasswordNumeros = "1234567890",
  textoPasswordSimbolos = "!@#$%^&*()_+{}|:<>?";

const caracteres =
  textoPasswordMinusculas +
  textoPasswordMayusculas +
  textoPasswordNumeros +
  textoPasswordSimbolos;

function generarPassword() {
  let password = "";
  password += textoPasswordMinusculas[Math.floor(Math.random() * length)];
  password += textoPasswordMayusculas[Math.floor(Math.random() * length)];
  password += textoPasswordNumeros[Math.floor(Math.random() * length)];
  password += textoPasswordSimbolos[Math.floor(Math.random() * length)];

  while (password.length < length) {
    password += caracteres[Math.floor(Math.random() * length)];
  }
  inputBox.value = password;
}

function copiarPassword() {
  inputBox.select();
  document.execCommand("copy");
  alert("Contraseña Copiada");
}

generateBtn.addEventListener("click", generarPassword);
copiaPassword.addEventListener("click", copiarPassword);
