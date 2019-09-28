/**
 * 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 第一种解法：暴力法
 * 解释：取每个元素的「值」，对比其第一次出现与最后一次出现的「键值」，
 * 由于题目中只有一个元素出现1次，其余均出现2次，
 * 出现两次的元素的键值不同，键值相同的那个元素即所得。
 * 补充：str.lastIndexOf(searchValue[, length]) 方法返回「指定值」在调用该方法的「字符串」中「最后」出现的位置，
 * 如果没找到则返回 -1。length为需要检索字符串的长度，默认值为str.length。
 * str.indexOf(searchValue, fromIndex) 方法返回调用它的 String 对象中第一次出现的指定值的索引，
 * 从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
 * 以上两个方法也适用于数组。
 * 执行用时：412ms，内存消耗：36.1MB
 * 时间复杂度：O(n)。遍历数组中n个元素。
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var singleNumber_1 = function(nums) {
  for(let num of nums) {
      if(nums.lastIndexOf(num) === nums.indexOf(num)) return num;
  }
};

/**
 * 第一种解法：先排序再暴力
 * 解释：经过排序后的数组，只要元素与前一项、后一项均不相同，即它为唯一。
 * 执行用时：96ms，内存消耗：36.8MB
 * 时间复杂度：O(n)。遍历数组中n个元素。
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var singleNumber_2 = function(nums) {
  nums = nums.sort();
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] != nums[i-1] && nums[i] != nums[i+1]) return nums[i];
  }
};


/**
 * 第一种解法：异或法
 * 解释：异或 a⊕0=a, a⊕a=0, a⊕b⊕a=(a⊕a)⊕b=0⊕b=b ，
 * 由于异或（XOR/⊕）运算满足交换律和结合律，
 * 应用在本题中，由于只有一个元素出现1次，其余元素均出现2次，
 * 由a⊕a=0可知，出现2次的元素被抵消为0，
 * 由0⊕b=b，即找到唯一元素。
 * 补充：arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * accumulator，累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
 * currentValue，数组中正在处理的元素
 * 执行用时：76ms，内存消耗：36.5MB
 * 时间复杂度：O(n*k)。每个元素都被移动1步。（ O(n)k次（ O(k) ）
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var singleNumber_3 = function(nums) {
  return nums.reduce((before, now) => before^now);
};


