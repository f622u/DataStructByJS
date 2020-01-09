/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let result = str.trim().match(/^(-|\+)?\d+/g);
  return result ? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31)) : 0;               
};