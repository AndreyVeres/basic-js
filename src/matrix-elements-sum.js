const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {

    for (let k = 0; k < matrix[i].length; k++) {
      if (i === 0) {
        result += matrix[i][k]
      }else {
        if(matrix[i-1][k]!==0){
          result += matrix[i][k]
        }
      }
    }
  }
  return result
}




module.exports = {
  getMatrixElementsSum
};