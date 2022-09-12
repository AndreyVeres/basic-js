const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let counterCats = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let current = matrix[row][col]
      if (typeof current === 'string') {
        if (current === '^^' && current.length === 2) {
          counterCats += 1
        }
      }

    }
  }
  return counterCats
}


module.exports = {
  countCats
};
