var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  // Declaring variables for each letter.

var wins = 0;
var losses = 0;
var guessRemain = 9;
var guesses = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//The game will reset when there are no guesses reaming. 
function reset () { 
    guessRemain = 9;
    guesses = [];
}

//The game will start when a key is pressed. 
document.onkeyup = function(event){

    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(userGuess + " " + computerGuess);
//If we have a match.
    if (userGuess === computerGuess) {
        wins++;
        console.log("wins: " + wins);
        console.log("You win!");
        alert("You Win!");
        reset();
        
//No match
    } else {
        guesses.push(userGuess);
        guessRemain--;
        console.log("guesses: " + guesses);
        console.log("Guesses Left: " + guessRemain);
    }
//No more guesses
    if (guessRemain === 0) {
        losses++;
        reset();
    }

    document.getElementById("wins-text").innerHTML = "<p>Wins: " + wins + "</p";
    document.getElementById("losses-text").innerHTML = "<p>Losses: " + losses + "</p>";
    document.getElementById("guess-remain").innerHTML = "<p>Guesses Left: " + guessRemain + "</p>";
    document.getElementById("guesses").innerHTML = "<p>Guessed so far: " + guesses.join(', ') + "</p>";
    
};