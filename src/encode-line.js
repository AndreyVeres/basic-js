const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  let counter = 1;
  let result = ''
  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      counter++
      continue;
    } else if (str[i] !== str[i + 1]) {
      if (counter === 1) {
        result += str[i]
      } else {
        result += counter + str[i]
      }
      counter = 1
    } else {
      result += str[i]
    }


  }
  return result
}

console.log(encodeLine('abbcca'))

module.exports = {
  encodeLine
};


// {

//   let map = {}
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//       map[str[i]] += 1
//     } else {
//       map[str[i]] = 1
//     }
//   }
//   let set = Array.from(new Set(str))
//   console.log(map[set[0]])
//   for (let i = 0; i < set.length; i++) {
//     if (map[set[i]] === 1) {
//       result += set[i]
//     } else {
//       result += map[set[i]] + set[i]
//     }
//   }
//   return result
// }