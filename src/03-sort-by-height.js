/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const barr = arr;
  for (let i = 0; i < barr.length - 1; i++) {
    for (let j = 0; j < barr.length - 1; j++) {
      if (barr[j] !== -1) {
        let next = i + 1;
        while (barr[next] === -1 && next < barr.length) {
          next++;
        }
        if (next >= barr.length) {
          break;
        }
        if (barr[j] > barr[next]) {
          const tmp = barr[j];
          barr[j] = barr[next];
          barr[next] = tmp;
        }
      }
    }
  }
  return barr;
}

module.exports = sortByHeight;
