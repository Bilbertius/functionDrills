'use strict';

function rockPaperScissors(num) {
  let cNum = ~~(Math.random() * 3) + 1;

  if (cNum === num) {
    return 'Tie!';
  } else if (
    (cNum === 1 && num === 2) ||
    (cNum === 2 && num === 3) ||
    (cNum === 3 && num === 1)
  ) {
    return 'Player Wins!';
  } else if (
    (cNum === 2 && num === 1) ||
    (cNum === 3 && num === 2) ||
    (cNum === 1 && num === 3)
  ) {
    return 'Computer Wins!';
  } else {
    return 'You must enter number 1, 2, or 3!';
  }
}
