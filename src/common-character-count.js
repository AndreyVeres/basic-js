const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let map = {}
  for (let letter of s1) {
    if (map[letter]) map[letter] += 1;
    else map[letter] = 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let current = s2[i]

    if (map[current] > 0) {
      counter++
      map[current]--
    }
  }
  return counter
}


module.exports = {
  getCommonCharacterCount
};

// 'use strict'
console.log(this)