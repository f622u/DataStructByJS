/**
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let v of s) {
    if(s.lastIndexOf(v) === s.indexOf(v)) {
      return s.indexOf(v);
    }  
}
return -1;
};