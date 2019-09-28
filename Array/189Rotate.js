/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 第一种解法：暴力法
 * 解释：最简单的方法是旋转 k 次，每次将数组旋转 1 个元素。
 * 执行用时：276ms，内存消耗：35.2MB
 * 时间复杂度：O(n*k)。每个元素都被移动1步。（ O(n)k次（ O(k) ）
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var rotate_1 = function(nums, k) {
  for(let i = 0; i < k; i++) { // 旋转k次
      let previous = nums[nums.length-1]; // 每次旋转，把最后一个元素记下，以防丢失数值
      for(let j = 0; j < nums.length; j++) { // 将数组中的每个元素向后移1位
        //每个元素向后移的方法：从第一个元素开始，每个元素依次跟最后一个元素交换位置。
          let tmp = nums[j]; 
          nums[j] = previous;
          previous = tmp;
      }
  }
};

/**
 * 第二种解法：使用额外的数组
 * 解释：我们可以用一个额外的数组来将每个元素放到正确的位置上，也就是原本数组里下标为「i」的我们把它放到「(i+k)%数组长度」的位置。然后把新的数组拷贝到原数组中。
 * 执行用时：76ms，内存消耗：36.7MB
 * 时间复杂度：O(n)。将元素放到新数组中需要一次遍历，将新数组的元素拷贝回原数组也需要一次遍历。
 * 空间复杂度：O(n)。额外使用了一个与原数组相同长度的数组空间。
 */
var rotate_2 = function(nums, k) {
  let tmp = [];
  for(let i = 0; i< nums.length; i++) {
     tmp[(i+k)%nums.length] = nums[i]; // 将每个元素的值赋给「新数组每个元素平移k位后的终点位置」
  }
  for(let j = 0; j< nums.length; j++) {
      nums[j] = tmp[j] 
  }
};

/**
 * 第三种解法：反转法。
 * 解释：想象数组是「循环数组」，最后一个元素与第一个元素直接有一条分界线，如下，
 * 当我们旋转数组k次，k%n个元素会跨过分界线移动到数组的头部，剩下的元素将向后移动。
 * 所以我们首先将所有元素反转，然后反转前k个元素，再反转后n-k个元素，即可。
 * 示例如下，设n=7且k=3
 * 原始数组：        1 2 3 4 5 6 7 
 * 反转所有数字后：   7 6 5 4 3 2 1 
 * 反转前k个元素后：  5 6 7 4 3 2 1
 * 反转后n-k个元素后：5 6 7 1 2 3 4 
 * 执行用时：64ms，内存消耗：35.1MB
 * 时间复杂度：O(n)。n个元素被反转了总共3次。
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var rotate_3 = function(nums, k) {
  k %= nums.length;
  rotate.prototype.reverse(nums, 0, nums.length-1);
  rotate.prototype.reverse(nums, 0, k-1);
  rotate.prototype.reverse(nums, k, nums.length-1);
};

rotate.prototype.reverse = function(nums, start, end) {
  while(start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}