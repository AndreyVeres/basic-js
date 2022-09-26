const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// console.log(true + 1)

let matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]

function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  let result = matrix.map(arr => arr.slice().fill(0))

  for (let R = 0; R < matrix.length; R++) {
    for (let C = 0; C < matrix[R].length; C++) {

      if(matrix[R][C] === true){
        result[R + 1][C] += 1
        result[R][C + 1] += 1
        result[R+1][C+1] += 1
      
      
        if(result[R - 1] !== undefined) {
          result[R-1][C-1] += 1
          result[R - 1][C] += 1
          result[R-1][C +1] +=1
        }  
        if(result [R][C - 1] !== undefined){
          result[R + 1][C -1 ] += 1
          result[R][C - 1] += 1
        } 
      }

    }
  }
  return result
}
console.log(minesweeper(matrix))

module.exports = {
  minesweeper
};
