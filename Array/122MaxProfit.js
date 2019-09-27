/**
 * 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    let temp = 0;
    temp = prices[i] - prices[i - 1];
    if (temp > 0) {
      res += temp;
    }
  }
  return res;
};