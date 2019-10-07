/**
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */

/**
 * 第一种解法：暴力法
 * 解释：取每个元素的「值」，对比其第一次出现与最后一次出现的「键值」，
 * 由于题目中只有一个元素出现1次，其余均出现2次，
 * 出现两次的元素的键值不同，键值相同的那个元素即所得。
 * 补充：
 * 1. str.lastIndexOf(searchValue[, length]) 方法返回「指定值」在调用该方法的「字符串」中「最后」出现的位置，
 * 如果没找到则返回 -1。length为需要检索字符串的长度，默认值为str.length。
 * str.indexOf(searchValue, fromIndex) 方法返回调用它的 String 对象中第一次出现的指定值的索引，
 * 从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
 * 以上两个方法也适用于数组。
 * 2. for in 遍历：遍历的是对象的可枚举属性，包括对象自身及从原型链继承而来的属性。
 * for of 遍历：遍历的是iterable object定义的可迭代数据。比如Set、Map、String、Array以及类似Array的arguments、NodeList
 * 执行用时：96ms，内存消耗：37.6MB
 * 时间复杂度：O(n^2)。遍历数组中n个元素，并且在每一趟遍历中寻找「元素值」对应的「键值」，相当于在遍历中遍历。
 * 空间复杂度：O(1)。没有使用额外空间。
 */
var firstUniqChar_1 = function(s) {
  for(let v of s) {
    if(s.lastIndexOf(v) === s.indexOf(v)) {
      return s.indexOf(v);
    }  
  }
  return -1;
};

/**
 * 第二种解法：哈希表
 * 解释：JavaScript的对象本质上是键值对对集合（Hash结构），
 * 但是传统上只能用字符串当作键，也就是“字符串-值”的对应，所以es6提供了Map。
 * Map类似于对象，但键的范围包括各种类型对值（包括对象），也就是“值-值”的对应。
 * 补充：
 * Map的API：
 * 1. size属性
 * 2. Map.prototype.set(key, value)：设置键名key对应的键值value，返回当前的Map对象，因此可链式调用
 * 3. Map.prototype.get(key)：读取key对应的键值，找不到则返回undefined。
 * 4. Map.prototype.has(key)：返回布尔值，表示某个键是否在当前Map对象中。
 * 5. Map.prototype.delete(key)：删除某个键，返回布尔值。
 * 6. Map.prototype.clear()：清除所有成员，没有返回值。
 * 执行用时：124ms，内存消耗：37.4MB
 * 时间复杂度：O(n^2)。遍历数组中n个元素，并且在每一趟遍历中寻找「元素值」对应的「键值」，相当于在遍历中遍历。
 * 空间复杂度：O(1)。占用了一个hash对象。
 */
var firstUniqChar_2 = function(s) {
  let hash = new Map();
  for(let i = 0; i < s.length; i ++) {
    if(hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else{
      hash.set(s[i], 1);
    }
  }
  for(let j = 0; j < s.length; j++) {
    if(hash.get(s[j]) === 1) {
      return j;
    }
  }
  return -1;
};