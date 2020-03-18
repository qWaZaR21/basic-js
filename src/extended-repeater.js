module.exports = function repeater(str, options) {
  // throw 'Not implemented';
  // remove line with error and write your code here

  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  if (addition === null) addition = 'null';

  //if (!additionSeparator) additionSeparator = '|';

  const additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str + additionStr).join(separator);
};
