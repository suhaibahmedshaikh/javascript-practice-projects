let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector(".guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const hint = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuesses(guess);
  });
}

function validateGuesses(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    prevGuess.push(guess);
    if (numGuesses >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else if (numGuesses === 0) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congrats You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Guessed number is too Low");
  } else if (guess > randomNumber) {
    displayMessage("Guessed number is too High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(msg) {
  hint.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
