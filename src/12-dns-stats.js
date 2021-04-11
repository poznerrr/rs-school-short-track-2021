/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const array = [];
  const myObj = {};
  for (let i = 0; i < domains.length; i++) {
    let tmp = '';
    array[i] = domains[i].split('.').reverse();
    for (let j = 0; j < array[i].length; j++) {
      tmp += `.${array[i][j]}`;
      if (tmp in myObj) {
        myObj[tmp] += 1;
      } else {
        myObj[tmp] = 1;
      }
    }
  }
  return myObj;
}

module.exports = getDNSStats;
