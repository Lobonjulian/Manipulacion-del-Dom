const teamName = document.getElementById('team');
const typeOfSport = document.getElementById('sport');
const worldCupYear = document.getElementById('year');
const headCoach = document.getElementById('head-coach');
const playerCards = document.getElementById('player-cards');
const playersDropdownList = document.getElementById('players');
const myFavoriteFootballTeam = {
  team: 'America de Cali',
  sport: 'Futbol',
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: 'Cesar Farias',
    matches: 17,
  },
  players: [
    {
      name: 'Cristian Barios',
      position: 'extremo derecho',
      number: 7,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Michael Barrios',
      position: 'extremo derecho',
      number: 18,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Daniel Bocanegra',
      position: 'defensa',
      number: 24,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Edwin Cardona',
      position: 'volante',
      number: 88,
      isCaptain: true,
      nickname: 'El Gordo',
    },
    {
      name: 'Nilson Castrillón',
      position: 'lateral derecho',
      number: 13,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Josen Escobar',
      position: 'volante',
      number: 36,
      isCaptain: false,
      nickname: 'Capitancito',
    },
    {
      name: 'Yojan Garces',
      position: 'delantero',
      number: 35,
      isCaptain: false,
      nickname: 'Papula',
    },
    {
      name: 'John Garcia',
      position: 'defensa',
      number: 15,
      isCaptain: false,
      nickname: 'N/A',
    },
    { name: 'Yaliston Martinez', position: 'lateral izquierdo', number: 30, isCaptain: false, nickname: 'N/A' },
    { name: 'Esneyder Mena', position: 'lateral izquierdo', number: 26, isCaptain: false, nickname: 'El Hijo del Viento' },
    { name: 'David Mina', position: 'lateral izquierdo', number: 14, isCaptain: false, nickname: 'N/A' },
    {
      name: 'Andres Mosquera',
      position: 'defensa',
      number: 4,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Juan Munera',
      position: 'portero',
      number: 31,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Harold Rivera',
      position: 'volante',
      number: 17,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Joel Graterol',
      position: 'portero',
      number: 1,
      isCaptain: true,
      nickname: 'N/A',
    },
    {
      name: 'Jeisson Palacios',
      position: 'defensa',
      number: 5,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Oscar Hernandez',
      position: 'volante',
      number: 23,
      isCaptain: false,
      nickname: 'N/A',
    }, 
    { name: 'Jader Quiñones', position: 'volante', number: 42, isCaptain: false, nickname: 'Janfry' },
    { name: 'Adrian Ramos', position: 'delantero', number: 20, isCaptain: true, nickname: 'El ídolo' },
    { name: 'Rodrigo Rivas', position: 'delantero', number: 38, isCaptain: false, nickname: 'N/A' },
    { name: 'Andres Sarmiento', position: 'extremo izquierdo', number: 29, isCaptain: false, nickname: 'N/A' },
    {
      name: 'Jorge Soto',
      position: 'portero',
      number: 12,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Rodrigo Holgado',
      position: 'delantero',
      number: 9,
      isCaptain: false,
      nickname: 'El Pirata',
    },
    {
      name: 'Victor Ibarbo',
      position: 'volante',
      number: 8,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Luis Paz',
      position: 'volante defensivo',
      number: 19,
      isCaptain: true,
      nickname: 'El Contador',
    },
    {
      name: 'Gaston Sauro',
      position: 'defensa',
      number: 2,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'David Quintero',
      position: 'portero',
      number: 38,
      isCaptain: false,
      nickname: 'N/A',
    },
    {
      name: 'Franco Leys',
      position: 'volante defensivo',
      number: 32,
      isCaptain: false,
      nickname: 'Papitas',
    },
    {
      name: 'Luis Sanchez',
      position: 'volante',
      number: 11,
      isCaptain: false,
      nickname: 'Niche',
    },
    { name: 'Ever Valencia', position: 'extremo izquierdo', number: 22, isCaptain: false, nickname: 'N/A' },
    { name: 'Edwin Velasco', position: 'lateral izquierdo', number: 21, isCaptain: false, nickname: 'N/A' },
    { name: 'Alexis Zapata', position: 'volante', number: 25, isCaptain: false, nickname: 'N/A' },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, nickname, isCaptain }) =>
        `<div class="player-card">
      <h2>${name} ${isCaptain ? '(Captain)' : ''} </h2>
      <p>Posición: ${position}</p>
      <p>Numero: ${number}</p>
      <p>Nickname: ${nickname !== null ? nickname : 'N/A'}</p>
    </div>
    `
    )
    .join('');
};

playersDropdownList.addEventListener('change', (e) => {
  playerCards.innerHTML = '';
  switch (e.target.value) {
    // case 'nickname':
    //   setPlayerCards(players.filter((player) => player.nickname !== null));
    //   break;
    case 'delantero':
      setPlayerCards(
        players.filter((player) => player.position === 'delantero')
      );
      break;
    case 'extremo-derecho':
      setPlayerCards(
        players.filter((player) => player.position === 'extremo derecho')
      );
      break;
    case 'extremo-izquierdo':
      setPlayerCards(
        players.filter((player) => player.position === 'extremo izquierdo')
      );
      break;
    case 'volante':
      setPlayerCards(players.filter((player) => player.position === 'volante'));
      break;
    case 'volante-defensivo':
      setPlayerCards(
        players.filter((player) => player.position === 'volante defensivo')
      );
      break;
    case 'defensa':
      setPlayerCards(players.filter((player) => player.position === 'defensa'));
      break;
    case 'lateral-derecho':
      setPlayerCards(
        players.filter((player) => player.position === 'lateral derecho')
      );
      break;
    case 'lateral-izquierdo':
      setPlayerCards(
        players.filter((player) => player.position === 'lateral izquierdo')
      );
      break;
    case 'portero':
      setPlayerCards(players.filter((player) => player.position === 'portero'));
      break;
    default:
      setPlayerCards();
  }
});
