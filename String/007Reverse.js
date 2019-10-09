/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */

/**
 * 第一种解法：暴力法
 * 解释：主要需要解决的是问题是「溢出」。
 * 执行用时：92ms，内存消耗：35.9MB
 * 时间复杂度：O(n)。进行一次遍历。
 * 空间复杂度：O(1)。占用一个标记位。
 */
var reverse = function (x) {
  let num = 0;
  a = Math.abs(x); // 绝对值
  while (a != 0) {
    temp = a % 10; // 取余
    num = num * 10 + temp // 叠加
    a = parseInt(a / 10) // 除以10并取整
  }
  if (x < 0 && num < Math.pow(2, 31)) { // 溢出上限
    return -num;
  } else if (x > 0 && num < Math.pow(2, 31) - 1) { // 溢出下限
    return num;
  } else {
    return 0;
  }
};
