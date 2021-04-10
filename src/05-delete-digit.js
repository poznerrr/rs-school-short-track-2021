/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const ourDigit = n.toString().split('');
  const maximax = [];
  for (let i = 0; i < ourDigit.length; i++) {
    const z = ourDigit.slice();
    z.splice(i, 1);
    maximax.push(Number(z.join('')));
  }
  return Math.max.apply(null, maximax);
}

module.exports = deleteDigit;
