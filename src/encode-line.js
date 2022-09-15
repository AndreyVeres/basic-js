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
  let map = {}
  
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]] += 1
    } else {
      map[str[i]] = 1
    }
  }
  let set = Array.from(new Set(str))
  
  for(let i = 0 ; i < set.length ; i ++){
    // result += map[set[i]] === 0 ? set[i] : set[i].repeat(map[set[i]])
  console.log(map)
  }
  return result
}

console.log(encodeLine('aaaatttt'))

module.exports = {
  encodeLine
};
