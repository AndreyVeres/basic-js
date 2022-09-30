const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');

    let deep = 1
    let deepCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
       deep += this.calculateDepth(arr[i])
      }
      if(arr[i] === arr.length - 1){
        console.log(arr[i] , arr[arr.length - 1])
      }
    }
    return deep;



  }
}
const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]))
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]))
console.log(depthCalc.calculateDepth([[[]]]))


module.exports = {
  DepthCalculator
};
