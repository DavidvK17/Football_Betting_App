'use strict';

// Practice data from a web service about a certain game
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 1.5
  }
};

// Challenge 1: Creating a player array for each team
const players1 = game.players[0];
const players2 = game.players[1];

// Challenge 2: Creating a variable for the first player of Bayern Munich (Goalkeeper) and one array for the remaing 10 field players
// my Solution; Using the REST Operator
const [gk, ...fieldplayers] = players1;

// Challenge 3: Create an array "allPlayers" containing all 22 players from both teams
// my solution: using the SPREAD Operator
const allPlayers = [...players1, ...players2];

// Challenge 4: Bayern Munich used 3 substitue players. Create a new aaray containing players1 plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Persisic'];

// Challenge 5: Based on game.odds object, create one variable for each odd (called team1, draw and team2)
const team1 = game.odds['team1'];
const draw = game.odds.x;
const team2 = game.odds['team2'];

// Challenge 6: write function which receives arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were score in total (number of player names passed in)

function printGoals(...players) {
  console.log(players);
  console.log(players.length);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// Challenge 7: team with lower odd is more likely to win, print to console which team is more likely to win without using if/else or ternary operator
// my solution: using short circuiting
team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team2 < team1 && console.log(`${game.team2} is more likely to win.`);
