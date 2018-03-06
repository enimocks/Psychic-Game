// VARIABLES
// ============================================================================================

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // An array of the 27 letters in the alphabet (lowercase).

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesMade = []; // Empty array to keep track of letters guessed each round.




// FUNCTIONS
// ============================================================================================

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase(); // Takes user's input key, converts to lowercase (if needed), and stores input in a variable.
  
  
  guessesMade.push(userGuess); // The push method takes the input key gathered above, and appends it to the end of the guessesMade array.
  
  // Generates a random number and multiplies it by the array length, then the number is rounded down and used as a value for accessing a random index position -- to take as the computer's letter guess.
  var computerGuess = letters[Math.floor(Math.random() * letters.length)];


// This reset function is called when we want to begin a new round, it clears the array of attempts, and resets guessesRemaining for a given letter.
  var reset = function() { 
    guessesRemaining = 9;
    guessesMade = [];
  }

  // GAME EXECUTION
  // ============================================================================================

  // Checks to see if the user's letter-key choice equals the computer's random choice.
  if (userGuess === computerGuess) {
    wins++; // If they match, the win counter is incremented, and the round is reset.
    reset();
  }
  else { // If the user hits a key other than the one the computer is storing,  derement the guesses remaining for the round.
    guessesRemaining--;
  }

  // When the guessesRemaining counter hits 0, chalk it up as a loss for the user, and then reset the round
  if (guessesRemaining === 0) {
    losses++;
    reset();
  }

  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
  document.querySelector("#guesses-made").innerHTML = guessesMade.join(", ");

};

// ---------QUESTIONS----------
// 1) Should my 4 document.querySelectors go elsewhere? Like inside the above functions?
// 2) How does the computer know to choose a new letter (for next round) when guessesRemaining hits 0?
// 3) Is the general structure/organization of this code desirable, or is there a more practical way to structure?
// 4) My game is not working in GitHub pages (not working -- 404 error).
