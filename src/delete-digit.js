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
  // n.toString()
  // let numbers = [...n + '']
  // numbers.sort((a, b) => b - a)
  // numbers.pop()
  // return parseInt(numbers.join(''))
  let numbers = [...n + '']
  let min = Math.min(...numbers)
  delete numbers[numbers.indexOf(min)]

  return parseInt(numbers.sort((a, b) => b - a).join(''))


  console.log(min)
}
console.log(deleteDigit(1001))


module.exports = {
  deleteDigit
};
