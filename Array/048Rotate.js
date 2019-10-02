/**
 * 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // const temp = matrix.flat();
  const temp = matrix.reduce((acc, val) => acc.concat(val), []);
  const length = matrix[0].length;
  matrix.forEach((item, i) => {
    item.forEach((ele, j) => {
      item[j] = temp[length * (length - 1 - j) + i];
    });
  });
};