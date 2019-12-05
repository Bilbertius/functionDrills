'use strict';

function decode(str) {
  let strArr = str.split(' '),
    charArr = [],
    i,
    len = strArr.length;

  for (i = 0; i < len; i++) {
    if (strArr[i].charAt(0) === 'a') {
      charArr.push(strArr[i].charAt(1));
    } else if (strArr[i].charAt(0) === 'b') {
      charArr.push(strArr[i].charAt(2));
    } else if (strArr[i].charAt(0) === 'c') {
      charArr.push(strArr[i].charAt(3));
    } else if (strArr[i].charAt(0) === 'd') {
      charArr.push(strArr[i].charAt(4));
    } else {
      charArr.push(' ');
    }
  }
  return charArr.join();
}
