const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  let numbers = n.toString().split('')
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    let arr = [...numbers]
    delete arr[i]
    let summ = arr.reduce((acc, item) => {
      return acc + item;
    })

     max = Math.max(max , summ)
  }

  return max
}
console.log(deleteDigit(1001))


module.exports = {
  deleteDigit
};