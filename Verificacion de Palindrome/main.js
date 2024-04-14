const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkPalindrome = (text) => {
    const textOrigen = text

    if (text === '') {
      alert('Por favor proporcione un texto');
      return
    }

    result.replaceChildren();

    const lowerCaseText = text.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

    let mensajeResultado = `<strong>${textOrigen}</strong> ${lowerCaseText === [...lowerCaseText].reverse().join('') ? 'es un Palindrome' : 'no es un Palindrome'} `;
  
    const p = document.createElement('p');
    p.className = 'result-message';
    p.innerHTML = mensajeResultado;
    result.appendChild(p);

    result.classList.remove('hidden');
  }

checkButton.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
})

textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkPalindrome(textInput.value);
    textInput.value = '';
  }
})