const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options ;
  
  let result = ''
  let additionStr = ''
  additionStr += (addition + additionSeparator).repeat(additionRepeatTimes)
  result += str + additionStr + separator


  return result.repeat(repeatTimes);
}
console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }), 'la+sla+sla+');
console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }), 'LALA++sLALA++sLALA++');

console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la');
console.log(repeater('single', { repeatTimes: 1 }), 'single');
console.log(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');

console.log(repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla');
console.log(repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point');
console.log(repeater('12345', { repeatTimes: 5, separator: '3 words separator' }), '123453 words separator123453 words separator123453 words separator123453 words separator12345');




module.exports = {
  repeater
};
