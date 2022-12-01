// create an array of objects named players
// inside of the objects have a name property and hand property which is an array
// create a deck which is an array
// create suits which is an array of strings of all card suits
// create ranks which is an array of strings of all card ranks
// make a variable for points and initialize to null
// create a function named createDeck that loops through the suits and for each suit loop through the ranks array and push that
// to the deck array
// then create a shuffleDeck function which uses math.random to calculate a random index and then push that to a new array
// then set deck equal to the new array
// then create a function named deal which pops out 2 cards to each player
// then lastly create a function winner that calculates all the point totals of each players hand and log the winner with the most points
console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'player one',
  hand: []
},
{
  name: 'player two',
  hand: []
},
{
  name: 'player three',
  hand: []
},
{
  name: 'player four',
  hand: []
}];
var deck = [];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
var points = null;

function createDeck() {
  for (var i = 0; i < ranks.length; i++) {
    for (var x = 0; x < suits.length; x++) {
      points = parseInt(ranks[i]);
      if (ranks[i] === 'jack' || ranks[i] === 'queen' || ranks[i] === 'king') {
        points = 10;
      } else if (ranks[i] === 'ace') {
        points = 11;
      }

      var card = {};
      card.suit = suits[x];
      card.rank = ranks[i];
      card.points = points;

      deck.push(card);
    }
  }

}

function shuffleDeck() {
  var shuffledDeck = [];
  for (var i = 0; i < 52; i++) {
    var shuffle = Math.floor(Math.random() * deck.length);
    shuffledDeck.push(deck[shuffle]);
  }
  deck = shuffledDeck;
}

function deal() {
  for (var i = 0; i < 2; i++) {
    for (var x = 0; x < players.length; x++) {
      var card = deck.pop(deck[i]);
      players[x].hand.push(card);
    }
  }
}

function logWinner() {
  var currWinner = 0;
  var winnerName = '';
  for (var i = 0; i < players.length; i++) {
    var score = players[i].hand[0].points + players[i].hand[1].points;
    if (score > currWinner) {
      currWinner = score;
      winnerName = players[i].name;
    }
  }
  console.log('Congrats you won: ' + winnerName);
}

createDeck();
shuffleDeck();
deal();
logWinner();
