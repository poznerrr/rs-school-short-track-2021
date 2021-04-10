/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mynames = [];
  if (names.length === 0) {
    return [];
  }
  mynames.push(names[0]);
  for (let i = 1; i < names.length; i++) {
    let count = 0;
    let filename = names[i];
    for (let j = 0; j < i; j++) {
      if (names[i] === names[j]) {
        count++;
      }
    }
    if (count !== 0) {
      filename = `${filename}(${count})`;
    }
    for (let j = 0; j < mynames.length; j++) {
      if (filename === mynames[j]) {
        filename = `${filename}(1)`;
      }
    }
    mynames.push(filename);
  }
  return mynames;
}

module.exports = renameFiles;
