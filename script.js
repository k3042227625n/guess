'use strict';
// document.querySelector('.message')
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '๐ Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.guess').value);

// Math.trunc(Math.random()*20)ใโ ใ0ใใ20ใพใงใฎๆฐๅคใใฉใณใใ ใซใMath.truncใงๅฐๆฐ็นๅ้ค

// const number = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = number;

// document.querySelector('.message')
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      // document.querySelector('.message').textContent = 'โ๏ธ No number!';
      displayMessage('โ๏ธ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '๐ Correct Number';
      displayMessage('๐ Correct Number');
      // css
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? '๐ใToo high!' : '๐ใToo low!';
        displayMessage(guess > secretNumber ? '๐ใToo high!' : '๐ใToo low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '๐ฅ You lost the game!';
        displayMessage('๐ฅ You lost the game!');
        document.querySelector('.score').textContent = '0';
      }
    }
    //   // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '๐ใToo high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '๐ฅ You lost the game!';
    //     document.querySelector('.score').textContent = '0';
    //   }
    //   // When guess is too law
    // } else if (guess < secretNumber) {
    //   if(score > 1) {
    //     document.querySelector('.message').textContent = '๐ใToo low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '๐ฅ You lost the game!';
    //     document.querySelector('.score').textContent = '0';      
    //   }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


// Numberใฏnumberๅใซๅคๆใใใใใฎใชใใธใงใฏใ
// ๆๅญๅ
// console.log('hello=' + Number("1234"));
// ๆฅไป(่กจ็คบใใใๆฐๅคใฏ็ต้ใใช็ง)
// console.log('date()=' + Number(new Date()) );

