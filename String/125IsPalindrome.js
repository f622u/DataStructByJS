/**
 * 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s === '') return true
  let reg = /[^A-Za-z0-9]/g// ^表示匹配除了中括号外的字符
  s = s.replace(reg,'').toLowerCase()  
  return s == s.replace(reg,'').split('').reverse().join('')
};
