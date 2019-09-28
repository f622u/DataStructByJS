/**
 * 从排序数组中删除重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0; // 不占用额外「数组」的情况下，使用一个变量记住「变化后数组」的元素下标，同时j也是计数器，记录「变化后数组长度」
  for(let i = 0; i < nums.length; i++) { // 遍历数组中的n个元素
      if(nums[i] != nums[i-1]) { // 由于是排序数组，如现元素与前一个元素不同，则现元素不重复，可加入「变化后数组」
          nums[j] = nums[i]; // 由于要求「原地」处理此数组，此行的j代表新下标。元素加入「变化后数组」
          j++; // 计数器+1，下标+1
      }
  }
  return j; // 返回新数组长度
};