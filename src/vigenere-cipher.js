class VigenereCipheringMachine {

  constructor(isReverceMachine) {
    this.isReverceMachine = isReverceMachine === false;
  }

  isLowerCaseLetter(charFromMessage) {
    return charFromMessage.charCodeAt() >= 97 && charFromMessage.charCodeAt() <= 122;
  }
  
  getEncryptChar(charFromMessage, charFromKey) {
    if (this.isLowerCaseLetter(charFromMessage)) {
      let codeChar = charFromMessage.charCodeAt() + charFromKey.charCodeAt() - 97;
      if (codeChar > 122) codeChar -= 26;
      return String.fromCharCode(codeChar);
    }
    return charFromMessage;
  }

  encrypt(message, key) {
      //throw 'Not implemented';
      // remove line with error and write your code here

    let result = '';

    const messageLowerCase = message.toLowerCase();
    const keyLowerCase = key.toLowerCase();

    for (let i = 0, keyIndex = 0; i < messageLowerCase.length; i++) {
      if (keyIndex >= keyLowerCase.length) keyIndex -= keyLowerCase.length;
      result += this.getEncryptChar(messageLowerCase[i], keyLowerCase[keyIndex]);
      if (this.isLowerCaseLetter(messageLowerCase[i])) keyIndex++;
    }

    return this.isReverceMachine ? result.toUpperCase().split('').reverse().join('') : result.toUpperCase();
  }

  getDecryptChar(charFromMessage, charFromKey) {
    if (this.isLowerCaseLetter(charFromMessage)) {
      let codeChar = charFromMessage.charCodeAt() - charFromKey.charCodeAt() + 97;
      if (codeChar < 97) codeChar += 26;
      return String.fromCharCode(codeChar);
    }
    return charFromMessage;
  }

  decrypt(encryptMessage, key) {
    //throw 'Not implemented';
    // remove line with error and write your code here

    let result = '';

    const encryptMessageLowerCase = encryptMessage.toLowerCase();
    const keyLowerCase = key.toLowerCase();

    for (let i = 0, keyIndex = 0; i < encryptMessageLowerCase.length; i++) {
      if (keyIndex >= keyLowerCase.length) keyIndex -= keyLowerCase.length;
      result += this.getDecryptChar(encryptMessageLowerCase[i], keyLowerCase[keyIndex]);
      if (this.isLowerCaseLetter(encryptMessageLowerCase[i])) keyIndex++;
    }

    return this.isReverceMachine ? result.toUpperCase().split('').reverse().join('') : result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
