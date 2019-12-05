'use strict';

function toInfinity(num) {
  let message = '';
  if (num === Infinity || num === -Infinity) {
    message = 'And beyond';
  } else if (num > 0 && num !== Infinity) {
    message = 'To infinity';
  } else if (num < 0 && num !== -Infinity) {
    message = 'To negative infinity';
  } else if (num === 0) {
    message = 'Staying home';
  }
  console.log(message);
}
