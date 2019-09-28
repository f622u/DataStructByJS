/**
 * 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) { // 循环整个数组，对每个元素进行以下操作
      for(let j = 0; j < i; j ++) { // 每「一个元素」与「该元素的前面所有元素对比」，若相等则返回「真」
          if(nums[j] == nums[i]) {
              return true
          }
      }
  }
  return false;
};