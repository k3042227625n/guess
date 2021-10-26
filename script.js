'use strict';
// document.querySelector('.message')
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.guess').value);

// Math.trunc(Math.random()*20)　→ 　0から20までの数値をランダムに、Math.truncで小数点削除

// const number = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = number;

// document.querySelector('.message')
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      // css
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈　Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥 You lost the game!';
      }
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉　Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


// Numberはnumber型に変換するためのオブジェクト
// 文字列
// console.log('hello=' + Number("1234"));
// 日付(表示された数値は経過ミリ秒)
// console.log('date()=' + Number(new Date()) );


