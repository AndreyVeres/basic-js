const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  const result = {
   

  }
 
  for(let i = 0 ; i < domains.length ; i ++) {
    let domain = ''
    let item =  domains[i].split('.')
    for(let k = item.length-1 ; k > -1 ; k --){
      domain = domain + '.' + item[k]
      
      if(result[domain]){
        result[domain] +=1;
      }else {
        result[domain] = 1;
      }
    }
    domain = '';
  }
  return result
}


module.exports = {
  getDNSStats
};
