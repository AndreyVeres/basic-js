const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */


function calculateHanoi(disksNumber, turnsSpeed) {
  throw new NotImplementedError('Not implemented');
  let turns = 0;
  let firstPillar = [];
  let secondPillar = []
  let thirdPillar = []


  for (let i = 0; i <= disksNumber; i--) {
    firstPillar.push(i)
  }
  console.log(firstPillar)
  while (firstPillar.length > 0) {
    let current = Math.max(
      firstPillar.pop(),
      secondPillar.pop() ? secondPillar.pop() : 0,
      thirdPillar.pop() ? thirdPillar.pop() : 0
    )
    console.log(current)
  }

  return firstPillar
}

// console.log(calculateHanoi(5, 10))

module.exports = {
  calculateHanoi
};
