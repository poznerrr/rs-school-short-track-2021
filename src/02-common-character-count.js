/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  const sar1 = s1.split('');
  const sar2 = s2.split('');
  for (let i = 0; i < sar1.length; i++) {
    const position = sar2.indexOf(sar1[i]);
    if (position !== -1) {
      common++;
      sar2.splice(position, 1);
    }
  }
  return common;
}

module.exports = getCommonCharacterCount;
