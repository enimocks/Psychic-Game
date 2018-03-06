// VARIABLES
// ==========================================================

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesMade = [];




// FUNCTIONS
// ==========================================================

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  guessesMade.push(userGuess);
  var computerGuess = letters[Math.floor(Math.random() * letters.length)];


  var reset = function() {
    guessesRemaining = 9;
    guessesMade = [];
  }

  // GAME EXECUTION
  // ==========================================================

  if (userGuess === computerGuess) {
    wins++;
    reset();
  }
  else {
    guessesRemaining--;
  }

  if (guessesRemaining === 0) {
    losses++;
    reset();
  }

  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
  document.querySelector("#guesses-made").innerHTML = guessesMade.join(", ");

};