"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guessLeft = 5;
document.querySelector(".guessLeft").textContent = guessLeft;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let highScore = 0;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  guessLeft = 5;
  document.querySelector(".guessLeft").textContent = guessLeft;
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Please enter a number!😏");
  } else if (guess === secretNumber) {
    displayMessage("YaY!!! you guessed the correct number😎");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").style.width = "30rem";
    if (guessLeft >= highScore) {
      highScore = guessLeft;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (guessLeft > 1) {
      displayMessage(
        guess < secretNumber
          ? "Too low... guess a higher number!"
          : "Too high... guess a lower number!"
      );
      guessLeft--;
      document.querySelector(".guessLeft").textContent = guessLeft;
    } else {
      displayMessage("You lost the game...😝😝");
      document.querySelector(".guessLeft").textContent = 0;
    }
  }
});
