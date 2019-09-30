/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let  i = 0 ; i < nums.length; i++) {
    let key  = nums.indexOf(0);
    if(key !== -1) {
     nums.splice(key, 1)
     nums.push(0)
    }
  }
  return nums;
};