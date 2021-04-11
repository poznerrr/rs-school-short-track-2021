/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n.toString();
  while (number.length > 1) {
    const tmp = number.split('');
    let sum = 0;
    for (let i = 0; i < tmp.length; i++) {
      sum += parseInt(tmp[i], 10);
    }
    number = sum.toString();
  }
  return parseInt(number, 10);
}

module.exports = getSumOfDigits;
