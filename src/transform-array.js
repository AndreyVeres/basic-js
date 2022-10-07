const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


const arr = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]

function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string' && !arr[i].includes('--')) return arr
    if (arr[i] === '--discard-next') {
      i += 2
      continue;
    }
    if (arr[i] === '--discard-prev') {
      result.pop()
    }
    if (arr[i] === '--double-next') {
      result.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev') {
      result.push(arr[i - 1])
    }
    else{
      result.push(arr[i])
    }
  }
  return result.filter(item => typeof item === 'number')
}

console.log(transform(arr))




module.exports = {
  transform
};
