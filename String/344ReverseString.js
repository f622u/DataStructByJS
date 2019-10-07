/**
 * 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/**
 * 第一种解法：双指针法(对撞指针法)
 * 解释：输入的是一个数组，所以使用的是反转数组元素的思路
 * 原数组： 1 2 3 4 5 6 7  a. 指针指向第一个元素和最后一个元素
 * 第一趟： 7 2 3 4 5 6 1  b. 将指针指向的位置的值互换，左指针向右移向2，右指针向右移向6
 * 第二趟： 7 6 3 4 5 2 1  c. 重复第2步直至两个指针对撞
 * 第三趟： 7 6 5 4 3 2 1  d. 反转完成
 * 执行用时：140ms，内存消耗：47.1MB
 * 时间复杂度：O(n)。进行一次遍历直至指针对撞。
 * 空间复杂度：O(1)。占用两个指针的位置。
 */
var reverseString = function(s) {
  let start = 0;
  let end = s.length-1;
    while(start < end){
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  return s;
};