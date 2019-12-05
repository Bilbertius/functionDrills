'use strict';

function turtleWalk(arr) {
  let [x, y] = arr;
  let filterWalk = arr.filter(walk => walk[x] < 0 || walk[y] < 0);
  let mapWalk = arr.map(walk => walk[x] + walk[y]);
  let forEachWalk = arr.forEach(walk => Math.abs(walk[x]) + Math.abs(walk[y]));

  return {
    filterWalk,
    mapWalk,
    forEachWalk
  };
}

turtleWalk([0, 5], [-2, 5], [12, -5], [-1, -1]);
