document.getElementById("diceRoll").addEventListener("click", rollTheDice);

function rollTheDice() {

  // Generate a random number, between 1 and 6, for each dice
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Change the dice image on the webpage to the associative number
  document.getElementById("img1").src = "images/dice" + randomNumber1 + ".png";
  document.getElementById("img2").src = "images/dice" + randomNumber2 + ".png";

  // Determine the outcome of the dice roll
  if (randomNumber1 > randomNumber2) {
    document.getElementById("header").innerHTML = "Player 1 Wins!"
  } else if (randomNumber2 > randomNumber1) {
    document.getElementById("header").innerHTML = "Player 2 Wins!"
  } else {
    document.getElementById("header").innerHTML = "Draw!"
  }

  document.getElementById("diceRoll").innerHTML = "Roll Again";

}
