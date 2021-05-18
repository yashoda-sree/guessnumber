'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Answer';
console.log(document.querySelector('.message').textContent);
*/
let highscore = 0;
let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!!';
  } else if (guess === num) {
    document.querySelector('.message').textContent = '🎉 Correct Answer';
    document.querySelector('body').style.backgroundColor = '#37994b';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = num;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = '🚫 Not in 1-20';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏫ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#992020';
      document.querySelector('.number').textContent = num;
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess < num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏬ Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#992020';
      document.querySelector('.number').textContent = num;
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(3, 88, 99)';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.number').style.width = '15rem';
});
