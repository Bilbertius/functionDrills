'use strict';

function avg(arr) {
  let sum = 0,
    len = arr.length;
  arr.forEach(elem => (sum += elem));
  return sum / len;
}
