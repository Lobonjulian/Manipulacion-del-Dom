const messageInput = document.getElementById('message-input');
const checkMessageButton = document.getElementById('check-message-btn');
const result = document.getElementById('result');

const helpRegex =  /por favor ayuda|ayuda/i 
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const  denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex]

const isSpam = (msg) => denyList.some((regex) => regex.test(msg))

checkMessageButton.addEventListener('click', () => {
  if (messageInput.value === "") {
    alert('Por favor proporcione un mensaje');
    return
  }

  result.textContent = isSpam(messageInput.value) ? 'Spam' : 'No Spam';
  messageInput.value = '';
})