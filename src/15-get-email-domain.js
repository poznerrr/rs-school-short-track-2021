/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const mymail = email.split('');
  let domain;
  for (let i = 0; i < mymail.length; i++) {
    if (mymail[i] === '@') {
      domain = mymail.slice(i + 1).join('');
    }
  }
  return domain;
}

module.exports = getEmailDomain;
