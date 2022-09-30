const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

let arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// -1,  -1,  -1, 150,160, 170, 180, 190
function sortByHeight(arr) {
  //  throw new NotImplementedError('Not implemented');
  let sorted = [...arr].sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) {
      sorted.splice(i, 1)
      i--
    }
  }
 
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
      sorted.splice(i , 0 , -1)
    }
    // if(sorted[i] === arr[i]) continue
    // if(sorted[i] < 0) {
    //   sorted.splice(i , 1)
    // }
    // if(arr[i] < 0 && sorted[i] > 0){
    //   sorted.splice(i , 0 , -1)
    // }
  }
return sorted
}

console.log(sortByHeight(arr))


module.exports = {
  sortByHeight
};



