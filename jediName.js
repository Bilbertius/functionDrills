'use strict';

const jediName = (first, last) => {
  let jediFirst = first.slice(0, 2);
  let jediLast = last.slice(0, 3);

  return jediLast + jediFirst;
};
