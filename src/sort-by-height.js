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


function sortByHeight(arr) {
   throw new NotImplementedError('Not implemented');

  // let map = arr.map((value, index) => {
  //   return { index: i, value: item }
  // })

  // map.sort((a,b) => {
  //   if(map[a] === -1) 
  // })
}



module.exports = {
  sortByHeight
};



// массив для сортировки
var list = ['Дельта', 'альфа', 'ЧАРЛИ', 'браво'];

// временный массив содержит объекты с позицией и значением сортировки
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

console.log(mapped)