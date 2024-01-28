let randomHit = 0;
let timer = 60;
let score = 0;

function makeBubble() {
  let counter = "";

  for (let i = 0; i < 198; i++) {
    let randomTarget = Math.floor(Math.random() * 10);
    counter += `<div class="bubble">${randomTarget}</div>`;
  }
  document.querySelector(".game_panel").innerHTML = counter;
}

function getNewHit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = randomHit;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        ".game_panel"
      ).innerHTML = `<h1>Game Over your Score is ${score}<h1>`;
    }
  }, 1000);
}

function updateScore() {
  score += 5;
  document.querySelector("#scoreVal").innerHTML = score;
}

document
  .querySelector(".game_panel")
  .addEventListener("click", function (clicked) {
    let clickenNum = Number(clicked.target.textContent);
    if (clickenNum === randomHit) {
      updateScore();
      makeBubble();
      getNewHit();
    }
  });

makeBubble();
getNewHit();
runTimer();
