// Array to store the teams
// const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12', 'Team 13', 'Team 14', 'Team 15', 'Team 16'];

 // Mine:
const estilos = [
  `<img src="../assets/quiz/art deco.png" alt="" id="artDecoPNG" onclick="escolher(0)">`,
  `<img src="../assets/quiz/contemporaneo.png" alt="" id="contemporaneaPNG" onclick="escolher(1)">`,
  `<img src="../assets/quiz/ecletico.png" alt="" id="ecleticoPNG" onclick="escolher(2)">`,
  `<img src="../assets/quiz/industrial.png" alt="" id="industrialPNG" onclick="escolher(3)">`,
  `<img src="../assets/quiz/moderno.png" alt="" id="modernoPNG" onclick="escolher(4)">`,
  `<img src="../assets/quiz/oriental.png" alt="" id="orientalPNG" onclick="escolher(5)">`,
  `<img src="../assets/quiz/rustico.png" alt="" id="rusticoPNG" onclick="escolher(6)">`,
  `<img src="../assets/quiz/tropical.png" alt="" id="tropicalPNG" onclick="escolher(7)">`,
  `<img src="../assets/quiz/boho.png" alt="" id="bohoPNG" onclick="escolher(8)">`,
  `<img src="../assets/quiz/cottage.png" alt="" id="cottagePNG" onclick="escolher(9)">`,
  `<img src="../assets/quiz/escandinavo.png" alt="" id="escandinavoPNG" onclick="escolher(10)">`,
  `<img src="../assets/quiz/minimalista.png" alt="" id="minimalistaPNG" onclick="escolher(11);">`,
  `<img src="../assets/quiz/organico.png" alt="" id="organicoPNG" onclick="escolher(12)">`,
  `<img src="../assets/quiz/provencal.png" alt="" id="provencalPNG" onclick="escolher(13)">`,
  `<img src="../assets/quiz/tradicional.png" alt="" id="tradicionalPNG" onclick="escolher(14)">`,
  `<img src="../assets/quiz/vintage.png" alt="" id="vintagePNG" onclick="escolher(15)">`
]

// Function to simulate a match between two teams
// function playMatch(teamA, teamB) {
  // Simulate the match and return the winner
//   const winner = Math.random() < 0.5 ? teamA : teamB;
//   return winner;
// }

 // Mine:
function playMatch(estiloA, estiloB) {
  var sorteioA = (Math.random() * 7).toFixed();
  var sorteioB = (Math.random() * 8 + 15).toFixed();

  estiloA = sorteioA;
  estiloB = sorteioB;

  return sorteioA, sorteioB
}

// Function to play a round of matches
function playRound(roundNumber) {
  console.log(`--- Round ${roundNumber} ---`);
  

  // Array to store the winners of each match
  const roundWinners = [];

  // Play matches for each pair of teams
  // for (let i = 0; i < teams.length; i += 2) {
  //   const teamA = teams[i];
  //   const teamB = teams[i + 1];

  //   const winner = playMatch(teamA, teamB);
  //   roundWinners.push(winner);

  //   console.log(`${teamA} vs ${teamB}: ${winner} wins!`);
  // }

  // Mine:
  for (let i = 0; i < estilos.length; i += 2) {
    const estiloA = estilos[i];
    const estiloB = estilos[i + 1];

    const winner = playMatch(estiloA, estiloB);
    roundWinners.push(winner);

    console.log(`${estiloA} vs ${estiloB}: ${winner} wins!`);
  }

  // Update the teams array with the winners
  // teams.length = 0;
  // teams.push(...roundWinners);

  estilos.length = 0;
  estilos.push(...roundWinners);
}

// Play the tournament with 16 rounds
for (let i = 1; i <= 4; i++) {
  playRound(i);
}

// Print the final winner
console.log(`\n--- Winner: ${estilos[0]} ---`);

// This code follows a similar structure to the previous example, but it simulates a tournament with 16 rounds. The teams are stored in an array, and the playMatch() function randomly selects a winner between two teams. The playRound() function plays the matches for each pair of teams and updates the teams array with the winners. Finally, the code prints the winner of the tournament after all 16 rounds are completed.