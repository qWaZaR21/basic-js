const chainMaker = {

  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.chainArray.length || typeof position !== 'number' || position < 1) {
      this.chainArray = [];
      throw new Error('Incorrect position');
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArray.reduce( (resultString, link, index) => {
      if (index === 0) return `${resultString}( ${link} )`;
      return `${resultString}~~( ${link} )`;
    }, '');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;
