const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '( )') {
    this.chain.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (!this.chain[position - 1]) console.error("You can't remove incorrect link!")
    this.chain = this.chain.filter((_, index) => {
      return index + 1 !== position
    })
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    console.log(this.chain.join('~~'))
    return this.chain.join('~~')
  }
};

chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()


module.exports = {
  chainMaker
};
