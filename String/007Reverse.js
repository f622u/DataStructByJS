/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */

/**
 * 第一种解法：暴力法
 * 解释：主要需要解决的是问题是「溢出」。
 * 执行用时：88ms，内存消耗：35.9MB
 * 时间复杂度：O(n)。进行一次遍历。
 * 空间复杂度：O(1)。占用一个标记位。
 */
var reverse = function (x) {
  var re = 0;
  while (parseInt(x / 10)) { // 小数点向左移动一位取整后大于0即为true，小于0即为false
      re = 10 * re + x - 10 * parseInt(x / 10); // 累加器
      x = parseInt(x / 10); // new x 为 old x 小数点向左移动一位
  }
  if (re > 214748364 || re < -214748364) return 0; // 如果溢出
  if ((re == 214748364 && x > 7) || (re == 214748364 && x < -8)) return 0;
  re = 10 * re + x;
  return re
};
