'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const changeBgColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const changeWidth = width => {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('β No Number!');
  } else if (guess === secretNumber) {
    displayMessage('πCorrect Number!');
    changeBgColor('green');
    changeWidth('30rem');
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'π Too High!' : 'π Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('π­ You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBgColor('#222');
  changeWidth('15rem');
});
