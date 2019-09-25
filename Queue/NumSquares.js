/**
 * 题目名称：完全平方数
 * @param {*} k 
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const res = [...Array(n+1)].map(item => item=0);
  for(let i = 1; i <= n; i++) {
      res[i] = i;
      for(let j = 1; i-j*j >=0; j++) {
          res[i] = Math.min(res[i], res[i-j*j]+1);
      }
  }
  return res[n];
};