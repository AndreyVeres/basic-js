const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
//'A B C D E F G H I J K  L  M  N  O  P  Q  R  S  T   U  V  W  X  Y  Z ' 
// 0 1 2 3 4 5 6 7 8 9 11 12 13 14 15 16 17 18 19 20  21 22 23 24 25 26
//ABC => C

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode,
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) throw new Error('Incorrect arguments!')

    let result = '';

    let keyIndex = 0
    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i].toUpperCase()
        continue;
      } else {
        let indexMessage = this.alphabet.indexOf(message[i].toUpperCase())
        let indexKey = this.alphabet.indexOf(key[keyIndex].toUpperCase())
        let neededIndex = indexMessage + indexKey;
        result += this.alphabet[neededIndex >= this.alphabet.length ?
          neededIndex - this.alphabet.length :
          neededIndex]

        if (keyIndex === key.length - 1) {
          keyIndex = 0
        } else {
          keyIndex++
        }
      }
    }
    // return result
    if(this.mode === false) return result.split('').reverse().join('')
    else return result
  }
  decrypt(EncryptedMessage, key) {
    if (!arguments[0] || !arguments[1]) throw new Error('Incorrect arguments!')
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < EncryptedMessage.length; i++) {
      if (!this.alphabet.includes(EncryptedMessage[i].toUpperCase())) {
        result += EncryptedMessage[i].toUpperCase()
        continue;
      }
      let indexMessage = this.alphabet.indexOf(EncryptedMessage[i].toUpperCase())
      let indexKey = this.alphabet.indexOf(key[keyIndex].toUpperCase());
      let neededIndex = indexMessage - indexKey;
      result += this.alphabet[neededIndex < 0 ?
        this.alphabet.length + neededIndex : neededIndex]
      // console.log( this.alphabet[neededIndex < 0 ?
      //   this.alphabet.length + neededIndex : neededIndex ])
      // console.log(this.alphabet[indexMessage -indexKey])
      // console.log(neededIndex)
      // console.log(26 - -9)
      if (keyIndex === key.length - 1) {
        keyIndex = 0
      } else {
        keyIndex++
      }
    }
    // console.log(result.split('').reverse().join(''))
    // return result
    if(this.mode === false) return result.split('').reverse().join('')
    else return result

  }
}
let machine = new VigenereCipheringMachine()
// machine.encrypt('Same length key', 'Samelengthkey')
machine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'JS')

module.exports = {
  VigenereCipheringMachine
};
