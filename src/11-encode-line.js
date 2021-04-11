/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const firstarray = str.split('');
  const myarray = [];
  let counter = 1;
  let current = firstarray[0];
  for (let i = 1; i < firstarray.length; i++) {
    if (firstarray[i] === current) {
      counter++;
    } else {
      if (counter > 1) {
        myarray.push(counter);
      }
      myarray.push(current);
      current = firstarray[i];
      counter = 1;
    }
    if (i === firstarray.length - 1) {
      if (counter > 1) {
        myarray.push(counter);
      }
      myarray.push(current);
    }
  }
  return myarray.join('');
}

module.exports = encodeLine;
