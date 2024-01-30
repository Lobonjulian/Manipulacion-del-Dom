const alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?!'_-&@#$%*()/";

function encriptar(text, key) {
  let textEncriptado = "";
  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const keyChar = key[i % key.length];

    const textIndex = alphabet.indexOf(textChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (textIndex === -1) {
      textEncriptado += textChar;
    } else {
      const newIndex = (textIndex + keyIndex) % alphabet.length;
      textEncriptado += alphabet[newIndex];
    }
  }
  return textEncriptado;
}

function desencriptar(textEncriptado, key) {
  let textDesencriptado = "";

  for (let i = 0; i < textEncriptado.length; i++) {
    const textEncriptadotChar = textEncriptado[i];
    const keyChar = key[i % key.length];

    const textEncriptadoIndex = alphabet.indexOf(textEncriptadotChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (textEncriptadoIndex === -1) {
      textDesencriptado += textEncriptadotChar;
    } else {
      const newIndex = textEncriptadoIndex - keyIndex;
      if (newIndex < 0) newIndex += alphabet.length;
      textDesencriptado += alphabet[newIndex];
    }
  }
  return textDesencriptado;
}

function updateResult(isEncriptado) {
  const text = document.getElementById("mensaje").value;
  const key = document.getElementById("key-enc").value;
  let result = "";

  if (isEncriptado) {
    result = encriptar(text, key);
  } else {
    result = desencriptar(text, key);
  }
  document.getElementById("resultado").value = result;
}

document.getElementById("btn-encriptar").addEventListener("click", function () {
  updateResult(true);
});

document
  .getElementById("btn-desencriptar")
  .addEventListener("click", function () {
    updateResult(false);
  });

document.addEventListener("DOMContentLoaded", () => {
  updateResult(true);
});
