function createContacto(){
  
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const numeroTelefono = document.createElement('p');
  numeroTelefono.textContent = 'Número de teléfono: 123-456-7890';

  const direccion = document.createElement('p');
  direccion.textContent = '🏘️ Dirección: Calle 35 # 1-45';

  const LocalizacionRestaurante = document.createElement('img')
  LocalizacionRestaurante.src = '../dist/img/LocalizacionRestaurante.png'
  LocalizacionRestaurante.alt = 'LocalizacionRestaurante'

  contact.appendChild(numeroTelefono)
  contact.appendChild(direccion)
  contact.appendChild(LocalizacionRestaurante)

  return contact
}

function loadContacto(){
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContacto());
}

export default loadContacto 