const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


let date = new Date(2030, 27, 1, 18, 36, 41, 841)
// console.log(Object.prototype.toString.call(date.getDay))
// console.log(Object.prototype.toString.call(date) === '[Object date]')

// console.log(Object.prototype.toString(date))
function getSeason(date) {

  // if((Object.prototype.toString.call(date.getDay) !== '[object Function]') || 
  // Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!')


  if (arguments.length < 1) return 'Unable to determine the time of year!';
  // if(!date instanceof Date) throw new Error('Invalid date!')
  // let { y, m, d } = date;
  // if (date.getFullYear() !== y ||
  //   date.getDay() !== d ||
  //   date.getMonth() !== m) console.error('Invalid date!')
 

  let month = date.getMonth()
  if (month === 11 ||
    month === 0 ||
    month === 1) return 'winter'
  else if (month >= 2 && month <= 4) return 'spring'
  else if (month >= 5 && month <= 7) return 'summer'
  else return 'autumn'
}

console.log(getSeason(date))

module.exports = {
  getSeason
};
