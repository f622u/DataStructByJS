/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = new Map();
  for(let i = 0; i < nums.length; i++) {
    let otherIndex = temp.get(target - nums[i]);
    if(otherIndex !== undefined) {
      return [otherIndex, i];
    }
    temp.set(nums[i], i);
  }
};