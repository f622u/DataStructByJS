/**
 * 两个数组的交集 II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(n^2)
var intersect = function(nums1, nums2) {
  let nums = [];
  if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  for(let i = 0; i < nums1.length; i++){
      let key = nums2.indexOf(nums1[i]);
      if (key !== -1) nums.push(nums2.splice(key, 1));
  }
  return nums;
};
